import React, { Component } from "react"

import { getAllMessages } from "utils/fileProvider"

class ReceiveMessage extends Component {

    constructor(props) {
        super(props)
        this.state = { listMessages: null }
        this.mounted = true
    }

    componentWillMount() {
        this.showAllMessages()
    }

    componentDidMount() {
        this.timeout = setInterval(() => this.showAllMessages(), 1000)
    }

    componentWillUnmount() {
        this.mounted = false
        clearInterval(this.timeout)
    }

    showAllMessages = () => {
        const { userName, profilMatchName } = this.props
        getAllMessages(userName, profilMatchName)
            .then((listMessages) => {
                if (this.mounted === true) {
                    this.setState({ listMessages: listMessages.results })
                }
            })
            .catch((error) => console.log(error))
    }

    render() {
        const { userName } = this.props
        const { listMessages } = this.state
        if (listMessages === null) {
            return <div />
        }
        return (
            <div>
                {
                    listMessages.map((data) => (
                        <div
                            key={ `messageId-${data.id}` }
                            style={ { textAlign: (data.fromUser === userName) ? "right" : "left" } }
                        >
                            <p>{ `${data.message}` }</p>
                            <p>{ `Send ${data.date}` }</p>
                        </div>
                    ))
                }
            </div>
        )
    }

}

export default ReceiveMessage