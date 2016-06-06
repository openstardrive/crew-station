import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import { generateId } from '../lib/id.ts'

import { reducer as activeScreenId } from './activeScreenId/index.ts'
import { reducer as systems } from './systems/index.ts'


export const reducer = combineReducers({
    activeScreenId: activeScreenId,
    config: config,
    screens: screens,
    systems: systems,
    routing: routerReducer
})


function screens (src, action) {
    return {}
}

function config (conf, action) {
    if (!conf) return {
        stationId: generateId(),
        availableScreenIds: ['sensors', 'thrusters']
    }
    return conf
}



