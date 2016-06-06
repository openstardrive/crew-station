import * as React from 'react'

import { ImmutableComponent } from '../../lib/immutable-component.ts'
import { SensorContact } from '../../systems/types.ts'
import { Grid } from './Grid.tsx'
import { Contact } from './Contact.tsx'

interface StateProps {
    contacts: SensorContact[]
}

interface DispatchProps {}

interface Props extends StateProps, DispatchProps {}

export class RadarScreen extends ImmutableComponent<Props, {}> {
    render() {
        return (
            <svg className='sensors-radar-screen' viewBox='-1 -1 2 2'>
                <Grid/>
                {this.props.contacts.map((contact)=><Contact key={contact.id} contact={contact} scaleMultiplier={.001}/>)}
            </svg>
        )
    }
}


