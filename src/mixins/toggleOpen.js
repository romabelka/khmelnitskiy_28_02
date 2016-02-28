export default {
    getInitialState() {
        return {
            isOpen: false
        }
    },

    toggleOpen() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    },

    close() {
        this.setState({
            isOpen: false
        })
    },

    open() {
        this.setState({
            isOpen: true
        })
    }

}