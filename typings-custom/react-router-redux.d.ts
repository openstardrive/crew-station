// the typings module for react-router-redux doesn't cooperate well with the redux module we use; TODO: try updating the react module
declare module "react-router-redux" {
    export function syncHistoryWithStore(browserHistory:any, store:any):any;
    export function routerReducer(state:any, action:any):any;
}