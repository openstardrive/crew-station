import { Action } from '../../types/third-party.ts'
import { SystemStateMap } from '../../types/app.ts'

export type State = SystemStateMap




export const SYSTEMS_UPDATE = 'SYSTEMS_UPDATE'

export interface SystemsUpdatePayload {
    systemsState:SystemStateMap
}

export function updateSystems(systemsState:SystemStateMap):Action<SystemsUpdatePayload> {
    return {
        type: SYSTEMS_UPDATE,
        payload: {
            systemsState: systemsState
        }
    }
}

export function updateSystemsReducer(state:State, action:Action<SystemsUpdatePayload>):State {
    return action.payload.systemsState
}








export function reducer(state:State = {}, action:Action<any>):State {
    switch (action.type) {
        case SYSTEMS_UPDATE:
            return updateSystemsReducer(state, action)
        default:
            return state
    }
}
