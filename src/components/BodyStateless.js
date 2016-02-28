import React from 'react'

export default (props) => {
    const { isOpen, body } = props
    if (!isOpen) return <noscript />
    return <p>{body}</p>
}