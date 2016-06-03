import { v4 } from 'node-uuid'

import { ID } from '../types/generic.ts'

export function generateId():ID {
    return v4()
}
