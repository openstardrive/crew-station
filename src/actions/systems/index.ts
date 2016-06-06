import { combineReducers } from 'redux'

import { reducer as thrusters } from './thrusters.ts'
import { reducer as sensors } from './sensors.ts'

export const reducer = combineReducers({
    sensors: sensors,
    thrusters: thrusters
})
