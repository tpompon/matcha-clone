import React, { Component } from "react"

import { setNewLocation } from "utils/fileProvider"

class NewLocation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            valueLocation: "",
            userAddress: "",
        }
    }

    componentWillMount() {
        const { userAddress } = this.props
        this.setState({ userAddress })
    }

    onChange = (e) => {
        this.setState({ valueLocation: e.target.value })
    }

    onClick = () => {
        const { userName } = this.props
        const { valueLocation } = this.state
        setNewLocation(userName, valueLocation)
        this.setState({ userAddress: valueLocation })
    }

    render() {
        const { userName } = this.props
        const { valueLocation, userAddress } = this.state
        return (
            <div>
                <p>{ userAddress }</p>
                <input
                    onChange={ (e) => this.onChange(e) }
                    value={ valueLocation }
                    type="text"
                    placeholder="Set new location !!!"
                />
                <button onClick={ () => this.onClick(userName, valueLocation) }>Send new location</button>
            </div>
        )
    }

}

export default NewLocation