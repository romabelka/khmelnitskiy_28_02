import React, { Component, PropTypes } from 'react'

class Title extends Component {
    static propTypes = {
        onClick: PropTypes.func
    };

    render() {
        const {onClick, children} = this.props
        return <h1 onClick = {onClick}>
            {children}
        </h1>
    }
}


export default Title