import React, { Component } from "react"

import { recorverPassword } from "utils/fileProvider"

import TextInput from "components/TextInput"

class LogIn extends Component {

    constructor(props) {
        super(props)
        this.state = {    
            value: "",
        }
    }

    render() {
        const { value } = this.state
        return (
            <div>
                <TextInput
                    value={ value }
                    placeholder="Put your mail address here !!"
                    onChangeValue={ (e) => this.setState({ value: e.target.value }) }
                    type="text"
                />
                <button onClick={ () => recorverPassword(value) }>Send</button>
            </div>
        )
    }

}

export default LogIn