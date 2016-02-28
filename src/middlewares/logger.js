export default store => next => action => {
    console.log('---', 'store before', action, store.getState());
    next(action)
    console.log('---', 'store after', action, store.getState());
}