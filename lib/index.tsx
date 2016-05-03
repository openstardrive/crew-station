import * as React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

// import reducer from './station/reducer'
// import Station from './station'

import './index.css'

// let store = createStore(reducer)
let createStoreWithThunks = applyMiddleware(thunk)(createStore)
let store = createStoreWithThunks(reducer)

render(
    <Provider store={store}>
        <div>Crew Station</div>
    </Provider>,
    document.getElementById("app")
)


function reducer(state:{} = {}, action:any) {  //delete me soon; use actual reducers
    return state
}