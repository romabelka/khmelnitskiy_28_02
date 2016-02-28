import SimpleStore from './SimpleStore'
import AppDispatcher from '../dispatcher'
import { LOAD_ALL_ARTICLES, _SUCCESS} from '../actions/constants'
import {uniq} from 'lodash'

class CommentStore extends SimpleStore {
    constructor(...args) {
        super(...args)

        this.dispatchToken = AppDispatcher.register((action) => {
            const { data, type, response, error } = action

            switch (type) {
                case LOAD_ALL_ARTICLES + _SUCCESS:
                    const comments = uniq(response
                        .map((article) => article.comments)
                        .reduce((acc, arr) => acc.concat(arr), []))
                    comments.forEach((id) => this.add({id}))
                    break;

                default:
                    return
            }
            this.emitChange()
        })

    }
}

export default CommentStore