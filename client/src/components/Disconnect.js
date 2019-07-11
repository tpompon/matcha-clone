import React from "react"
import { withRouter } from "react-router-dom"

import { userIsDeLog } from "utils/fileProvider"

const Disconnect = ({ history, userName }) => (
    <div
        onClick={ () => {
            userIsDeLog(userName)
            history.push("/LoginAccount")
        } }
    >
        Disconnect
    </div>
)

export default withRouter(Disconnect)
