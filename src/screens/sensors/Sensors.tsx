import * as React from 'react'
import { connect } from 'react-redux'

import { ImmutableComponent } from '../../lib/immutable-component.ts'
import { AppState } from '../../types/app.ts'


interface StateProps {}

interface DispatchProps {}

interface Props extends StateProps, DispatchProps {}

class Component extends ImmutableComponent<Props, {}> {
    render() {
        return <div>The Sensors!</div>
    }
}


function mapStateToProps(state:AppState):StateProps {
    return {}
}

export const Sensors = connect(mapStateToProps)(Component)
