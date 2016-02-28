import React, { Component, PropTypes } from 'react'
import Title from './Title'
import Body from './BodyStateless'
import toggleOpen from '../HOC/toggleOpen'

class Article extends Component {

    static propTypes = {
        article: PropTypes.object.isRequired,

        //-------from toggleOpen---------
        open: PropTypes.func,
        close: PropTypes.func,
        toggleOpen: PropTypes.func,
        isOpen: PropTypes.bool
    };

    render() {
        const { article: { body, title }, isOpen, toggleOpen} = this.props
        return (
            <div ref = "article">
                <Title onClick = {toggleOpen}>{title}</Title>
                <Body isOpen = {isOpen} body = {body}/>
            </div>
        )
    }
}

export default toggleOpen(Article)