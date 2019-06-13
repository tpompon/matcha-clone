import React, { Component } from "react"
import { withRouter } from "react-router-dom"

import { checkKey, userIsLog } from "utils/fileProvider"

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

class ConfirmKey extends Component {

    constructor(props) {
        super(props)
        this.state = { valueKey: "" }
    }

    confirmKey = () => {
        const { userName, history } = this.props
        const { valueKey } = this.state
        checkKey(userName, Number(valueKey))
            .then((response) => {
                if (response.dataUser !== undefined && response.dataUser.userName === userName) {
                    userIsLog(userName)
                    history.push("/", { dataUser: response.dataUser })
                } else if (response.results !== undefined && response.results === false) {
                    alert("Wrong key")
                }
            })
            .catch((error) => console.log(error))
    }

    render() {
        const { closeModal } = this.props
        const { valueKey } = this.state
        return (
            <div style={ styles.popup }>
                <div style={ styles.popupInner }>
                    <input
                        type="number"
                        value={ valueKey }
                        onChange={ (e) => this.setState({ valueKey: e.target.value }) }
                        placeholder="Put your key here"
                    />
                    <button onClick={ () => this.confirmKey() }>Confirm key !</button>
                    <button onClick={ () => closeModal() }>Close confirmKey</button>
                </div>
            </div>
        )
    }

}

export default withRouter(ConfirmKey)