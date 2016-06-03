declare const process
if (process.env.INCLUDE_LOGS) console.log('env', process.env)

import './index.css'

import * as React from 'react'
import { createStore } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import { AppState } from './types/app.ts'
import { ID } from './types/generic.ts'
import { reducer } from './actions/index.ts'
import { loggedReducer } from './lib/logged-reducer.ts'
import { generateId } from './lib/id.ts'

import { Menu } from './menu/Menu.tsx'
import { Thrusters } from './screens/thrusters/Thrusters.tsx'
import { Sensors } from './screens/sensors/Sensors.tsx'


const stationId = localStorage.getItem('osd-station-id') || generateId()
localStorage.setItem('osd-station-id', stationId)

const initialState = defaultState(stationId)

const store = createStore(loggedReducer(reducer, process.env.INCLUDE_LOGS), initialState)


render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={Menu}>
                <Route path='/sensors' component={Sensors}/>
                <Route path='/thrusters' component={Thrusters}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
)





function defaultState(stationId:ID):AppState {
    return {
        config: {
            stationId: stationId,
            availableScreenIds: ['sensors', 'thrusters']
        },
        screens: {},
        systems: {}
    }
}
