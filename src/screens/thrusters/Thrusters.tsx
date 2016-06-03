import * as React from 'react'
import { connect } from 'react-redux'

import { ImmutableComponent } from '../../lib/immutable-component.ts'
import { AppState, ScreenInfo } from '../../types/app.ts'


export const info:ScreenInfo = {
    id: 'thrusters',
    name: 'thrusters',
    route: '/thrusters',
    requiredSystemIds: [
        'thrusters'
    ]
}

interface StateProps {}

interface DispatchProps {}

interface Props extends StateProps, DispatchProps {}

class Component extends ImmutableComponent<Props, {}> {
    render() {
        return <div>The Thrusters!</div>
    }
}


function mapStateToProps(state:AppState):StateProps {
    return {}
}

export const Thrusters = connect(mapStateToProps)(Component)
