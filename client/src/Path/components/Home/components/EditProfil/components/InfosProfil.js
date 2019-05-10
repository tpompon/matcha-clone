import React, { Component } from "react"
// import PropTypes from "prop-types"

import { saveInfosProfil } from "utils/fileProvider"

import Form  from "components/Form"

class InfosProfil extends Component {

    constructor(props) {
        super(props)
        const {
            lastName, firstName, userName, email,
        } = props.infosUser
        this.state = {
            inputArray: [
                { name: "lastName", type: "text", value: lastName, placeholder: "lastName" },
                { name: "firstName", type: "text", value: firstName, placeholder: "firstName" },
                { name: "userName", type: "text", value: userName, placeholder: "userName" },
                { name: "newPassword", type: "password", value: "", placeholder: "New password" },
                { name: "email", type: "email", value: email, placeholder: "email" },
            ],
        }
        console.log("test")
    }

    onChangeValue = (e, index) => {
        const { inputArray } = this.state
        inputArray[index].value = e.target.value
        this.setState({ inputArray })
    }

    render() {
        const { infosUser } = this.props
        const { inputArray } = this.state
        return (
            <div>
                <Form inputArray={ inputArray } onChangeValue={ this.onChangeValue } />
                <button onClick={ () => saveInfosProfil(infosUser.id, inputArray) }>Save</button>
            </div>
        )
    }

}

InfosProfil.protoType = {}

export default InfosProfil