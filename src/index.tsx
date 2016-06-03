declare const process
if (process.env.INCLUDE_LOGS) console.log('env', process.env)

import './index.css'

import * as React from 'react'
import { createStore } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import { AppState, ScreenID } from './types/app.ts'
import { ID } from './types/generic.ts'

import { reducer } from './actions/index.ts'
import { setActiveScreenId } from './actions/activeScreenId/index.ts'
import { loggedReducer } from './lib/logged-reducer.ts'
import { generateId } from './lib/id.ts'

import { Menu } from './menu/Menu.tsx'
import { Thrusters, info as thrusterInfo } from './screens/thrusters/Thrusters.tsx'
import { Sensors, info as sensorInfo } from './screens/sensors/Sensors.tsx'


const LOCAL_STORAGE_ID_KEY = 'osd-station-id'
const stationId = localStorage.getItem(LOCAL_STORAGE_ID_KEY) || generateId()
localStorage.setItem(LOCAL_STORAGE_ID_KEY, stationId)

const initialState = defaultState(stationId)

const store = createStore(loggedReducer(reducer, process.env.INCLUDE_LOGS), initialState)
const history = syncHistoryWithStore(browserHistory, store)


render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={Menu}>
                <Route
                    path={sensorInfo.route}
                    component={Sensors}
                    onEnter={setActiveScreen(sensorInfo.id)}
                    onLeave={setActiveScreen(null)}
                />
                <Route
                    path={thrusterInfo.route}
                    component={Thrusters}
                    onEnter={setActiveScreen(thrusterInfo.id)}
                    onLeave={setActiveScreen(null)}
                />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
)


function setActiveScreen(screenId:ScreenID) {
    return () => store.dispatch( setActiveScreenId(screenId) )
}


function defaultState(stationId:ID):AppState {
    return {
        activeScreenId: null,
        config: {
            stationId: stationId,
            availableScreenIds: ['sensors', 'thrusters']
        },
        screens: {},
        systems: {}
    }
}
