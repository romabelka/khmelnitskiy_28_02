class Model {
    constructor(data, stores) {
        Object.assign(this, data)
        this.__stores = stores
    }

    getRelation(relation) {
        const store = this.__stores[relation]
        if (!store || !this[relation]) return []
        return this[relation].map(store.getById)
    }
}

export default Model