import React, { Component, PropTypes } from 'react'
import Title from './Title'
import Body from './BodyStateless'
import toggleOpen from '../HOC/toggleOpen'
import Select from 'react-select'
require('react-select/dist/react-select.css')

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
        const options = ['yes', 'no'].map((opt) => {
            return {
                label: opt.toUpperCase(),
                value: opt
            }
        })
        return (
            <div ref = "article">
                <Title onClick = {toggleOpen}>{title}</Title>
                <Body isOpen = {isOpen} body = {body}/>
                <Select options = {options} multi={true}/>
            </div>
        )
    }
}

export default toggleOpen(Article)