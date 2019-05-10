import React, { Component } from "react"
import { withRouter } from "react-router-dom"

import { addNewUser } from "utils/fileProvider"

import Form from "components/Form"
import ConfirmKey from "./components/ConfirmKey"

class CreateAccount extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputArray: [
                { name: "lastName", type: "text", value: "", placeholder: "lastName" },
                { name: "firstName", type: "text", value: "", placeholder: "firstName" },
                { name: "userName", type: "text", value: "", placeholder: "userName" },
                { name: "password", type: "password", value: "", placeholder: "password" },
                { name: "email", type: "email", value: "", placeholder: "email" },
            ],
            showConfirmKey: false,
            userName: "",
        }
    }

    onChangeValue = (e, index) => {
        const { inputArray } = this.state
        inputArray[index].value = e.target.value
        this.setState({ inputArray })
    }

    checkIfUserExist = () => {
        const { inputArray } = this.state
        addNewUser(inputArray)
            .then((response) => {
                if (response) {
                    this.setState({ showConfirmKey: true, userName: response.userName })
                }
            })
            .catch((error) => console.log(error))
    }

    toggleShowConfirmKey = () => {
        this.setState({ showConfirmKey: !this.state.showConfirmKey })
    }

    render() {
        const { inputArray, showConfirmKey, userName } = this.state
        return (
            <div>
                <Form inputArray={ inputArray } onChangeValue={ this.onChangeValue } />
                <button onClick={ () => this.checkIfUserExist() }>Create your account</button>
                {
                    (showConfirmKey)
                        ? (
                            <ConfirmKey
                                userName={ userName }
                                closeModal={ this.toggleShowConfirmKey }
                            />
                        )
                        : null
                }
                <button onClick={ () => this.toggleShowConfirmKey() }>Confirm your key</button>
            </div>
        )
    }

}

export default withRouter(CreateAccount)