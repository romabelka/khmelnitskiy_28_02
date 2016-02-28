import React from 'react'
import CommentList from './CommentList'

export default (props) => {
    const { isOpen, article } = props
    if (!isOpen) return <span />
    return (
        <div>
            <p>{article.body}</p>
            <CommentList comments = {article.comments} />
        </div>)
}