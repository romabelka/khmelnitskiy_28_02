import { _SUCCESS, _FAIL, _START } from '../actions/constants'
import $ from 'jquery'

export default store => next => action => {
    const { callAPI, type, ...rest} = action
    if (!callAPI) return next(action)

    next({
        type: type + _START,
        ...rest
    })

    $.get(callAPI)
        .done((response) => {
            next({
                type: type + _SUCCESS,
                ...rest,
                response
            })
        })
        .fail((error) => {
            next({
                type: type + _FAIL,
                ...rest,
                error
            })
        })
}