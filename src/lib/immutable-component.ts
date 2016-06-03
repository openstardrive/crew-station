import { Component } from 'react'
import { shouldComponentUpdate } from 'react-addons-pure-render-mixin'

export class ImmutableComponent<P, S> extends Component<P, S> {

    public shouldComponentUpdate:Function

    constructor(props) {
        super(props)
        this.shouldComponentUpdate = shouldComponentUpdate.bind(this)
    }
}
