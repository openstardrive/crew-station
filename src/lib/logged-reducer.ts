import { Action, Reducer } from '../types/third-party.ts'

export function loggedReducer<State, Payload>(reducer:Reducer<State, Payload>, shouldLog:boolean):Reducer<State, Payload> {  //TODO: type reducer correctly
    if (!shouldLog) return reducer
    return (state:State, action:Action<Payload>):State => {
        const nextState = reducer(state, action)
        console.log(action.type, 'prev', state, 'next', nextState)
        return nextState
    }
}
