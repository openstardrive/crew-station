import { URL, ID, HasId } from './generic.ts'

export interface AppState {
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

export interface ScreenInfo extends HasId {
    name: string
    route: URL
    requiredSystemIds: SystemID[]
}