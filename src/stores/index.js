import SimpleStore from './SimpleStore'
import ArticleStore from './ArticleStore'
import { articles } from '../fixtures'

export const articleStore = new ArticleStore(articles)