import { find } from 'lodash'

import { info as sensors } from './sensors/Sensors.tsx'
import { info as thrusters } from './thrusters/Thrusters.tsx'
import { ScreenID, ScreenInfo } from '../types/app.ts'

export const screenInfos:ScreenInfo[] = [
    sensors,
    thrusters
]

export function getInfo(screenId:ScreenID) {
    return find(screenInfos, (si:ScreenInfo)=>si.id === screenId)
}

export function getInfos(screenIds:ScreenID[]) {
    return screenIds.map(getInfo)
}
