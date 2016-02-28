import AppDispatcher from '../dispatcher'
import { loadAll } from './api/articles'
import { LOAD_ALL_ARTICLES, DELETE_ARTICLE, _START, _FAIL, _SUCCESS} from './constants'


export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        data: { id }
    }
}

export function loadAllArticles() {}

/*export function loadAllArticles() {
    AppDispatcher.dispatch({
        type: LOAD_ALL_ARTICLES + _START
    })

    loadAll()
        .done((response) => {
            AppDispatcher.dispatch({
                type: LOAD_ALL_ARTICLES + _SUCCESS,
                response
            })
        }).fail((error) => {
            AppDispatcher.dispatch({
                type: LOAD_ALL_ARTICLES + _FAIL,
                error
            })
        })
}*/
