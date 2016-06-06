import * as React from 'react'

import { ImmutableComponent } from '../../lib/immutable-component.ts'
import { SensorContact } from '../../systems/types.ts'

interface Props {
    contact: SensorContact
    scaleMultiplier: number
}

export class Contact extends ImmutableComponent<Props, {}> {
    render() {
        const textSpacer = .04
        let contact = this.props.contact
        let scaleMultiplier = this.props.scaleMultiplier
        let name = {
            x: contact.position.x * scaleMultiplier + textSpacer,
            y: contact.position.y * scaleMultiplier + textSpacer,
            anchor: 'start'
        }
        if (contact.position.x > 0) {
            name.x -= textSpacer * 2
            name.anchor = 'end'
        }
        if (contact.position.y > 0) {
            name.y -= textSpacer
        }

        return (
            <g>
                <text className='sensors-contact-text' x={name.x} y={name.y} textAnchor={name.anchor}>{contact.name}</text>
                <circle className='sensors-contact-circle' key={contact.id} cx={contact.position.x * scaleMultiplier} cy={contact.position.y * scaleMultiplier} r='.03'/>
            </g>
        )
    }
}
