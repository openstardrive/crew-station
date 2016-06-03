import { generateId } from '../lib/id.ts'

import { AppState } from '../types/app.ts'
import { Action } from '../types/third-party.ts'


export function reducer(state:AppState = defaultState(), action:Action<any>):AppState {
    return state
}



function defaultState():AppState {
    return {
        config: {
            stationId: generateId(),
            screens: []
        },
        screens: {},
        systems: {}
    }
}
