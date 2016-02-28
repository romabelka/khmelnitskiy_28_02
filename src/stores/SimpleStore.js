import { EventEmitter } from 'events'
import Model from './Model'
const CHANE_EVENT = 'CHANE_EVENT'


class SimpleStore extends EventEmitter {
    constructor(stores, initialState) {
        super()
        this.__stores = stores
        this.__entities = []
        if (initialState) {
            initialState.forEach(this.add)
        }
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


    add = (item) => {
        this.__entities.push(new Model(item, this.__stores))
    }

    remove(id) {
        this.__entities = this.__entities.filter(entity => entity.id != id)
    }

    getById = (id) => {
        return this.__entities.filter(entity => entity.id == id)[0]
    };

    getAll() {
        return this.__entities.slice()
    }
}

export default SimpleStore