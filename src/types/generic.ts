export type URL = string
export type ID = string

export interface HasId {
    id: ID
}

export interface Coordinate2D {
    x:number
    y:number
}

export interface Coordinate3D {
    x:number
    y:number
    z:number
}

export interface EulerAngles {
    yaw:number
    pitch:number
    roll:number
}