// typings doesn't have a great module for node-uuid; it throws type errors.
declare module "node-uuid" {
    export function v4():string;
}