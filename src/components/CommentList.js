import React, { Component, PropTypes } from 'react'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array
    };

    render() {
        const { comments } = this.props
        if (!comments || !comments.length) return <span>No comments</span>
        const commentItems = comments.map((comment) => {
            return <li key={comment.id}>{comment.text}</li>
        })

        return (
            <ul>
                {commentItems}
            </ul>
        )
    }
}

export default CommentList