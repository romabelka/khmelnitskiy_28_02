import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { increment } from '../actions/counter'

class Counter extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                {this.props.counter}
                <a href = "#" onClick = {this.handleClick}>increment me</a>
            </div>
        )
    }

    handleClick = (ev) => {
        ev.preventDefault()
        this.props.increment()
    }
}

export default connect((state) => {
    const { counter } = state
    return { counter }
}, {
    increment
})(Counter)