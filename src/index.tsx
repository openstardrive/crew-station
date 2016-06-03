import './index.css'

import * as React from 'react'
import { createStore } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { reducer } from './actions/index.ts'

import Menu from './menu/Menu.tsx'

let store = createStore(reducer)

render(
    <Provider store={store}>
        <Menu/>
    </Provider>,
    document.getElementById('app')
)
