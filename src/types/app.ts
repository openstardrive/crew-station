import { URL, ID } from './generic.ts'

export interface AppState {
    config: AppConfig
    screens: ScreenStateMap
    systems: SystemStateMap
}

export interface SystemStateMap {

}

export interface ScreenStateMap {}



export interface AppConfig {
    stationId: ID
    screens: ScreenConfig[]
}

export interface ScreenConfig {
    route: URL
    requiredSystems: string[]
}