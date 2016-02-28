import SimpleStore from './SimpleStore'
import AppDispatcher from '../dispatcher'

class ArticleStore extends SimpleStore {
    constructor(...args) {
        super(...args)
        AppDispatcher.register((action) => {
            const { data, type } = action

            switch (type) {
                case 'DELETE_ARTICLE':
                    this.remove(data.id)
                    break;
                default:
                    return
            }
            this.emitChange()
        })
    }
}

export default ArticleStore