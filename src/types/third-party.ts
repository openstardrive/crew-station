export interface Action<Payload> {
    type: string;
    payload: Payload;
    error?: any;
    meta?: any;
}