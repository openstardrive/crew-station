import './index.css'

import * as React from 'react'
import { createStore } from 'redux'
// import thunk from 'redux-thunk'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { reducer } from './actions/index.ts'

// import reducer from './station/reducer'
// import Station from './station'

import Menu from './menu/Menu.tsx'

let store = createStore(reducer)
// let createStoreWithThunks = applyMiddleware(thunk)(createStore)
// let store = createStoreWithThunks(reducer)

render(
    <Provider store={store}>
        <Menu/>
    </Provider>,
    document.getElementById('app')
)


// function reducer(state:{} = {}, action:any) {  //delete me soon; use actual reducers
//     return state
// }
