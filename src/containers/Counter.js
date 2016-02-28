import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { increment } from '../actions/counter'
import { loadAllArticles } from '../actions/articleActions'

class Counter extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                {this.props.counter}
                <a href = "#" onClick = {this.handleClick}>increment me</a>
                <br />
                <a href = "#" onClick = {this.loadArticles}>load articles</a>
            </div>
        )
    }

    handleClick = (ev) => {
        ev.preventDefault()
        this.props.increment()
    }

    loadArticles = (ev) => {
        ev.preventDefault()
        this.props.loadAllArticles()
    }
}

export default connect((state) => {
    const { counter } = state
    return { counter }
}, {
    increment,
    loadAllArticles
})(Counter)