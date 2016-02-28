import { INCREMENT } from '../actions/constants'

export default (state = 0, action) => {
    const { type, data } = action

    switch (type) {
        case INCREMENT: return state + 1
    }

    return state
}