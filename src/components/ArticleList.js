import React, { Component } from 'react'
import Article from './Article'
import { articleStore } from '../stores'
import { deleteArticle, loadAllArticles } from '../actions/articleActions'

class ArticleList extends Component {
    render() {
        const articleItems = this.state.articles.map((article) => {
            return <li key = {article.id} style={ {color: 'red'} }>
                <a href = "#" onClick = {this.removeArticle(article.id)}>remove article</a>
                <Article article = {article}/>
            </li>
        })

        return (
            <ul>
                {articleItems}
            </ul>
        )
    }
    removeArticle(id) {
        return () => {
            deleteArticle(id)
        }
    }

}

export default ArticleList