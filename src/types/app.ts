import { URL, ID, HasId } from './generic.ts'

export interface AppState {
    activeScreenId: ScreenID  // I don't love this; there should be a way to get this info from the router
    config: AppConfig
    screens: ScreenStateMap
    systems: SystemStateMap
    routing?: any  //TODO: type correctly
}

export interface SystemStateMap {

}

export type SystemID = 'sensors' | 'thrusters'

export interface ScreenStateMap {}

export type ScreenID = 'sensors' | 'thrusters'


export interface AppConfig {
    stationId: ID
    availableScreenIds: ScreenID[]
    // apiEndpoint: URL
    // publicEndpoint: URL
    // assetsEndpoint: URL
}

export interface ScreenInfo {
    id: ScreenID
    name: string
    route: URL
    requiredSystemIds: SystemID[]
}