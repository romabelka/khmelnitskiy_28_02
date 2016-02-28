import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import logger from './middlewares/logger'
import api from './middlewares/api'
import DevToolsContainer from './containers/DevTools'

const store = compose(
        applyMiddleware(api, logger),
        DevToolsContainer.instrument()
    )(createStore)(reducer)



/*
if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducer', () => {
        const nextRootReducer = require('../reducer')
        store.replaceReducer(nextRootReducer)
    })
}
*/


window.store = store
export default store