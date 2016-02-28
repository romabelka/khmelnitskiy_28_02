import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import logger from './middlewares/logger'

const store = applyMiddleware(logger)(createStore)(reducer)

window.store = store
export default store