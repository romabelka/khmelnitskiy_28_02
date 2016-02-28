import React from 'react'
import Title from './Title'
import Body from './BodyStateless'
import toggleOpen from '../mixins/toggleOpen'

const Article = React.createClass({
    mixins: [toggleOpen],
    getInitialState() {
        return {
            some: 'dasdasd'
        }
    },
    render() {
        const { article: { body, title }} = this.props
        const { isOpen } = this.state
        return (
            <div ref = "article">
                <Title onClick = {this.toggleOpen}>{title}</Title>
                <Body isOpen = {isOpen} body = {body}/>
            </div>
        )
    }

})

export default Article