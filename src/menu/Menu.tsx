import * as React from 'react'
import { connect } from 'react-redux'

import { ImmutableComponent } from '../lib/immutable-component.ts'
import { AppState } from '../types.ts'


interface StateProps {}

interface DispatchProps {}

interface Props extends StateProps, DispatchProps {}

class Menu extends ImmutableComponent<Props, {}> {
    render() {
        return <div>The menu!</div>
    }
}


function mapStateToProps(state:AppState):StateProps {
    return {}
}

export default connect(mapStateToProps)(Menu)
