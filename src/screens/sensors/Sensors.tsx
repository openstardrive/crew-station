import * as React from 'react'
import { connect } from 'react-redux'

import { ImmutableComponent } from '../../lib/immutable-component.ts'
import { AppState, ScreenInfo, ScreenID } from '../../types/app.ts'
import { SensorContact } from '../../systems/types.ts'

export const id:ScreenID = 'sensors'
export const info:ScreenInfo = {
    id: id,
    name: 'sensors',
    route: '/sensors',
    requiredSystemIds: [
        'sensors'
    ]
}

interface StateProps {
    contacts: SensorContact[]
}

interface DispatchProps {}

interface Props extends StateProps, DispatchProps {}

class Component extends ImmutableComponent<Props, {}> {

    render() {
        return <div>{this.props.contacts.length}</div>
    }
}


function mapStateToProps(state:AppState):StateProps {
    return {
        contacts: state.systems[id].contacts
    }
}

function mapDispatchToProps(dispatch:Function):DispatchProps {
    return {}
}

export const Sensors = connect(mapStateToProps, mapDispatchToProps)(Component)
