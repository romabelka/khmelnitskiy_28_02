import React, { Component } from 'react'
import Article from './Article'

class ArticleList extends Component {
    render() {
        const articleItems = this.props.articles.map((article) => {
            return <li key = {article.id}><Article article = {article}/></li>
        })

        return (
            <ul>
                {articleItems}
            </ul>
        )
    }
}

export default ArticleList