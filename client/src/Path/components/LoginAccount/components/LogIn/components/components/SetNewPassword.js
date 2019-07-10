import React, { Component } from "react"
import { withRouter } from "react-router-dom"

import Form from "components/Form"

import { recoverPassword } from "utils/fileProvider"
import { checkPassword } from "utils/utils"

const styles = {
    popup: {
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: "auto",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    popupInner: {
        position: "absolute",
        left: "25%",
        bottom: "25%",
        top: "25%",
        right: "25%",
        margin: "auto",
        background: "white",
    },
}

class SetNewPassword extends Component {

	constructor(props) {
        super(props)
        this.state = {
			inputArray: [
				{ name: "key", type: "number", value: "", placeholder: "Enter your key" },
				{ name: "password", type: "password", value: "", placeholder: "New password" },
				{ name: "confirmPassword", type: "password", value: "", placeholder: "Confirm new password" }
			],
		}
	}
    
    setNewPassword = () => {
        const { closeModal } = this.props
        const { inputArray } = this.state
        const password = inputArray.find(inputData => inputData.name === "password").value
        const confirmPassword = inputArray.find(inputData => inputData.name === "confirmPassword").value
        const key = inputArray.find(inputData => inputData.name === "key").value
        if (password.trim() !== "" && confirmPassword !== "" && password === confirmPassword) {
            if (checkPassword(password)) {
                recoverPassword(password, key)
                closeModal()
            } else {
                alert("The password is not securised !!!")
            }
        }
    }

	onChange = (e, index) => {
		const { inputArray } = this.state
		inputArray[index].value = e.target.value
		this.setState({ inputArray })
	}

	render() {
		return (
			<div style={ styles.popup }>
                <div style={ styles.popupInner }>
					<Form inputArray = { this.state.inputArray } onChangeValue = { this.onChange } />
                    <button onClick={ () => this.setNewPassword() }>Confirm key !</button>
                </div>
            </div>
		)
	}
	
}

export default withRouter(SetNewPassword)
