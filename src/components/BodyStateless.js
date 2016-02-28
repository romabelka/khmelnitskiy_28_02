import React from 'react'
import CSSTransition from 'react-addons-css-transition-group'
require('./animation.css')

export default (props) => {
    const { isOpen, body } = props
    const bodyEl = isOpen ? <p key={body}>{body}</p> : null
    return (
        <CSSTransition
            transitionName="animation"
            transitionAppear={true}
            transitionAppearTimeout = {500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {bodyEl}
        </CSSTransition>
    )
}