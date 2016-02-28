import { EventEmitter } from 'events'
const CHANE_EVENT = 'CHANE_EVENT'

class SimpleStore extends EventEmitter {
    constructor(initialState) {
        super()
        this.__entities = initialState || []
    }

    addChangeListener(callback) {
        this.on(CHANE_EVENT, callback)
    }

    removeChangeListener(callback) {
        this.removeListener(CHANE_EVENT, callback)
    }

    emitChange() {
        this.emit(CHANE_EVENT)
    }


    add(item) {
        this.__entities.push(item)
    }

    remove(id) {
        this.__entities = this.__entities.filter(entity => entity.id != id)
    }

    getById(id) {
        return this.__entities.filter(entity => entity.id == id)[0]
    }

    getAll() {
        return this.__entities.slice()
    }
}

export default SimpleStore