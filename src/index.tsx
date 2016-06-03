import './index.css'

import * as React from 'react'
import { createStore } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import { reducer } from './actions/index.ts'

import { Menu } from './menu/Menu.tsx'
import { Thrusters } from './screens/thrusters/Thrusters.tsx'
import { Sensors } from './screens/sensors/Sensors.tsx'

let store = createStore(reducer)

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
