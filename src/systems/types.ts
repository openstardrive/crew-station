import { Coordinate2D, Coordinate3D, EulerAngles, HasId } from '../types/generic.ts'

//////////////////////////
/// Sensors //////////////
//////////////////////////

export interface SensorsState {
    contacts: SensorContact[]
}

export interface SensorContact extends HasId {
    name: string
    position: Coordinate2D
    destination: SensorContactDestination
}

export interface SensorContactDestination extends Coordinate2D {
    arriveInMilliseconds: number
}

///////////////////////////
/// Thrusters /////////////
///////////////////////////

export interface ThrustersState {
    velocity: Coordinate3D
    attitude: EulerAngles
}