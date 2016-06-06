import { Action } from '../../types/third-party.ts'
import { ThrustersState } from '../../systems/types.ts'

export type State = ThrustersState

///////////////////////////
/// UPDATE THRUSTERS //////
///////////////////////////

export const THRUSTERS_UPDATE = 'THRUSTERS_UPDATE'

export interface UpdateThrustersPayload {
    thrusterState: ThrustersState
}

export function updateThrusters(thrusterState:ThrustersState):Action<UpdateThrustersPayload> {
    return {
        type: THRUSTERS_UPDATE,
        payload: {
            thrusterState: thrusterState
        }
    }
}

export function updateThrustersReducer(state:State, action:Action<UpdateThrustersPayload>):State {
    return action.payload.thrusterState
}

//////////////////////
/// Reducer //////////
//////////////////////

export function reducer(state:State = null, action:Action<any>):State {
    switch (action.type) {
        case THRUSTERS_UPDATE:
            return updateThrustersReducer(state, action)
        default:
            return state
    }
}
