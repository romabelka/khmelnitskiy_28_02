import React from 'react'
import ReactDOM from 'react-dom'
//import ArticleList from './components/ArticleList'
import Root from './containers/Root'
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(<Provider store={store}>
    <Root />
</Provider>, document.getElementById('container'))