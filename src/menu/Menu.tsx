import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { createSelector } from 'reselect'

import { ImmutableComponent } from '../lib/immutable-component.ts'

import { AppState, ScreenInfo } from '../types/app.ts'
import { getInfos as getScreenInfos } from '../screens/index.ts'


interface StateProps {
    screenInfos: ScreenInfo[]
}

interface DispatchProps {}

interface Props extends StateProps, DispatchProps {}

class Component extends ImmutableComponent<Props, {}> {
    render() {
        return (
            <section className='menu'>
                <div className='menu-inner'>
                    {
                        this.props.screenInfos.map(({route, name, id}:ScreenInfo) => {
                            return (
                                <div className='menu-link' key={id}>
                                    <Link to={route}>{name}</Link>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='menu-children'>{this.props.children}</div>
            </section>
        )
    }
}


const availableScreenIdsSelector = (state:AppState) => state.config.availableScreenIds
const screenInfosSelector = createSelector(
    availableScreenIdsSelector,
    getScreenInfos
)

function mapStateToProps(state:AppState):StateProps {
    return {
        screenInfos: screenInfosSelector(state)
    }
}

export const Menu = connect(mapStateToProps)(Component)

