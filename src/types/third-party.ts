export interface Action<Payload> {
    type: string;
    payload: Payload;
    error?: any;
    meta?: any;
}

export type Reducer<State, Payload> = (s:State, a:Action<Payload>)=>State
