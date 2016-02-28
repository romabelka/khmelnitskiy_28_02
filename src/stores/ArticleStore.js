import SimpleStore from './SimpleStore'
import AppDispatcher from '../dispatcher'
import { LOAD_ALL_ARTICLES, DELETE_ARTICLE, _START, _FAIL, _SUCCESS} from '../actions/constants'

class ArticleStore extends SimpleStore {
    constructor(...args) {
        super(...args)
        this.dispatchToken = AppDispatcher.register((action) => {
            const { data, type, response, error } = action

            switch (type) {
                case DELETE_ARTICLE:
                    this.remove(data.id)
                    this.emitChange()
                    break;

                case LOAD_ALL_ARTICLES + _START:
                    this.loading = true
                    this.emitChange()
                    break;

                case LOAD_ALL_ARTICLES + _SUCCESS:
                    console.log('---', this.__stores.comments);
                    AppDispatcher.waitFor([this.__stores.comments.dispatchToken])
                    this.loading = false
                    this.loaded = true
                    response.forEach(this.add)
                    this.emitChange()
                    break;

                default:
                    return
            }
        })
    }
}

export default ArticleStore