import React, { Component } from "react"

import { sendMessage } from "utils/fileProvider"

const styles = {
    container: {
        display: "flex",
    },
}

class SendMessage extends Component {

    constructor(props) {
        super(props)
        this.state = { messageValue: "" }
    }

    render() {
        const { userName, profilMatchName } = this.props
        const { messageValue } = this.state
        return (
            <div style={ styles.container }>
                <input
                    type="text"
                    value={ messageValue }
                    onChange={ (e) => this.setState({ messageValue: e.target.value }) }
                    placeholder="Put your message here"
                />
                <button onClick={ () => sendMessage(userName, profilMatchName, messageValue) }>Send your message</button>
            </div>
        )
    }

}

export default SendMessage