import React, {Component as ReactComponent} from 'react'

export default (Component) => {
    return class extends ReactComponent {
        state = {
            isOpen: true
        };

        toggleOpen = () => {
            this.setState({
                isOpen: !this.state.isOpen
            })
        }

        close = () => {
            this.setState({
                isOpen: false
            })
        }

        open = () => {
            this.setState({
                isOpen: true
            })
        }


        render() {
            return <Component
                {...this.props}
                {...this.state}
                open = {this.open}
                close= {this.close}
                toggleOpen = {this.toggleOpen}
            />
        }
    }
}