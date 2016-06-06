import { Action } from '../../types/third-party.ts'
import { SensorsState } from '../../systems/types.ts'

export type State = SensorsState

///////////////////////////////
/// SET ACTIVE SCREEN ID //////
///////////////////////////////

export const SENSORS_UPDATE = 'SENSORS_UPDATE'

export interface UpdateSensorsPayload {
    sensorsState: SensorsState
}

export function updateSensors(sensorsState:SensorsState):Action<UpdateSensorsPayload> {
    return {
        type: SENSORS_UPDATE,
        payload: {
            sensorsState: sensorsState
        }
    }
}

export function updateSensorsReducer(state:State, action:Action<UpdateSensorsPayload>):State {
    return action.payload.sensorsState
}

//////////////////////
/// Reducer //////////
//////////////////////

export function reducer(state:State = null, action:Action<any>):State {
    switch (action.type) {
        case SENSORS_UPDATE:
            return updateSensorsReducer(state, action)
        default:
            return state
    }
}
