import SimpleStore from './SimpleStore'
import ArticleStore from './ArticleStore'
import { articles, comments } from '../fixtures'

let stores = {}
Object.assign(stores, {
    articles: new ArticleStore(stores, articles),
    comments: new SimpleStore(stores, comments)
})

export const articleStore = stores.articles
export const commentsStore = stores.comments

window.stores = stores
export default stores