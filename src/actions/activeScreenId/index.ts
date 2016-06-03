import { Action } from '../../types/third-party.ts'
import { ScreenID } from '../../types/app.ts'

export type State = ScreenID

///////////////////////////////
/// SET ACTIVE SCREEN ID //////
///////////////////////////////

export const ACTIVE_SCREEN_ID_SET = 'ACTIVE_SCREEN_ID_SET'

export interface ActiveScreenIdSetPayload {
    activeScreenId:ScreenID
}

export function setActiveScreenId(activeScreenId:ScreenID):Action<ActiveScreenIdSetPayload> {
    return {
        type: ACTIVE_SCREEN_ID_SET,
        payload: {
            activeScreenId: activeScreenId
        }
    }
}

export function setActiveScreenIdReducer(state:State, action:Action<ActiveScreenIdSetPayload>):State {
    return action.payload.activeScreenId
}


//////////////////////
/// Reducer //////////
//////////////////////

export function reducer(screenId:State = null, action:Action<any>):State {
    console.log('correct reducer')
    switch (action.type) {
        case ACTIVE_SCREEN_ID_SET:
            return setActiveScreenIdReducer(screenId, action)
        default:
            return screenId
    }
}
