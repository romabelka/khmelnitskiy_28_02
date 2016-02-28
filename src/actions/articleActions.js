import AppDispatcher from '../dispatcher'

export function deleteArticle(id) {
    AppDispatcher.dispatch({
        type: 'DELETE_ARTICLE',
        data: { id }
    })
}

export function loadAllArticles() {
    AppDispatcher.dispatch({
        type: 'LOAD_ALL_ARTICLES_START'
    })


}