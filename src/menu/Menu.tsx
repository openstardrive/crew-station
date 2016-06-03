import * as React from 'react'
import { connect } from 'react-redux'

import { ImmutableComponent } from '../lib/immutable-component.ts'
import { AppState } from '../types/app.ts'


interface StateProps {}

interface DispatchProps {}

interface Props extends StateProps, DispatchProps {}

class Component extends ImmutableComponent<Props, {}> {
    render() {
        return (
            <section>
                <div>The menu!</div>
                <div>{this.props.children}</div>
            </section>
        )
    }
}


function mapStateToProps(state:AppState):StateProps {
    return {}
}

export const Menu = connect(mapStateToProps)(Component)
