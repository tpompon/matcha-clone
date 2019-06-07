import React, { Component } from "react"

import { setNewLocation } from "utils/fileProvider"

class NewLocation extends Component {

    constructor(props) {
        super(props)
        this.state = { valueLocation: "" }
    }

    render() {
        const { userAddress, userName } = this.props
        const { valueLocation } = this.state
        return (
            <div>
                <p>{ userAddress }</p>
                <input
                    onChange={ (e) => this.setState({ valueLocation: e.target.value }) }
                    value={ valueLocation }
                    type="text"
                    placeholder="Set new location !!!"
                />
                <button onClick={ () => setNewLocation(userName, valueLocation) }>Send new location</button>
            </div>
        )
    }

}

export default NewLocation