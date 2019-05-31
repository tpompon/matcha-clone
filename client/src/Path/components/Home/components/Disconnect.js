import React from "react"
import { withRouter } from "react-router-dom"

import { userIsDeLog } from "utils/fileProvider"

const Disconnect = ({ history, userName }) => (
    <button
        onClick={ () => {
            userIsDeLog(userName)
            history.push("/LoginAccount")
        } }
    >
        Disconnect
    </button>
)

export default withRouter(Disconnect)