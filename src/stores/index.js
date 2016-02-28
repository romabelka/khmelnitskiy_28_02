import SimpleStore from './SimpleStore'
import ArticleStore from './ArticleStore'
import CommentStore from './CommentStore'
import { articles, comments } from '../fixtures'

let stores = {}
Object.assign(stores, {
    articles: new ArticleStore(stores),
    comments: new CommentStore(stores)
})

export const articleStore = stores.articles
export const commentsStore = stores.comments

window.stores = stores
export default stores