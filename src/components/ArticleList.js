import React, { Component } from 'react'
import Article from './Article'
import { articleStore } from '../stores'
import { deleteArticle } from '../actions/articleActions'

class ArticleList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: articleStore.getAll()
        }
    }

    componentDidMount() {
        articleStore.addChangeListener(this.onArticlesChange)
    }

    componentWillUnmount() {
        articleStore.removeChangeListener(this.onArticlesChange)
    }

    render() {
        const articleItems = this.state.articles.map((article) => {
            return <li key = {article.id}>
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

    onArticlesChange = () => {
        this.setState({
            articles: articleStore.getAll()
        })
    }

    removeArticle(id) {
        return () => {
            deleteArticle(id)
        }
    }

}

export default ArticleList