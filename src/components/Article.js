import React, { Component, PropTypes } from 'react'
import Title from './Title'
import Body from './BodyStateless'

class Article extends Component {

    static propTypes = {
        article: PropTypes.object.isRequired
    };

/*
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
*/
    state = {
        isOpen: false
    };

    componentDidMount() {
        console.log(this.refs)
    }


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

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };
}

export default Article