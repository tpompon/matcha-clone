import React, { Component } from "react"
import { withRouter } from "react-router-dom"

import { checkLogIn, userIsLog } from "utils/fileProvider"

import Form from "components/Form"
import ForgetPassword from "./components/ForgetPassword"
import Geolocalisation from "./components/Geolocalisation"

class LogIn extends Component {

    constructor(props) {
        super(props)
        this.state = {
            inputArray: [
                { name: "userName", type: "text", value: "", placeholder: "userName" },
                { name: "password", type: "password", value: "", placeholder: "password" },
            ],
            showForgetPassword: false,
        }
    }

    onChangeValue = (e, index) => {
        const { inputArray } = this.state
        inputArray[index].value = e.target.value
        this.setState({ inputArray })
    }

    checkIfUserExist = () => {
        const { history } = this.props
        const { inputArray } = this.state
        checkLogIn(inputArray)
            .then((response) => {
                if (response !== 0) {
                    userIsLog(response.userName)
                    history.push("/", { dataUser: { ...response } })
                } else {
                    alert("Mauvais nom d'utilisateur ou mauvais mot de passe !!!")
                }
            })
            .catch((error) => console.log(error))
    }

    render() {
        const { showForgetPassword, inputArray } = this.state
        return (
            <div>
                <Form inputArray={ inputArray } onChangeValue={ this.onChangeValue } />
                <button onClick={ () => this.checkIfUserExist() } >Log</button>
                <button onClick={ () => this.setState({ showForgetPassword: !this.state.showForgetPassword }) }>Mot de passe oublié</button>
                {
                    (showForgetPassword)
                        ? <ForgetPassword />
                        : null
                }
                <div>
                    <Geolocalisation />
                </div>
            </div>
        )
    }

}

export default withRouter(LogIn)