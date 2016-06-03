import { info as sensors } from './sensors/Sensors.tsx'
import { info as thrusters } from './thrusters/Thrusters.tsx'
import { ScreenID } from '../types/app.ts'

export const screenInfos:ScreenInfo[] = [
    sensors,
    thrusters
]

export function getInfo(screenId:ScreenID)