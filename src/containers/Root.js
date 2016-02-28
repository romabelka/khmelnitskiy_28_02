import React, { Component, PropTypes } from 'react'
import Counter from './Counter'
import DevTools from './DevTools'

class Root extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <Counter />
                <DevTools />
            </div>
        )
    }
}

export default Root