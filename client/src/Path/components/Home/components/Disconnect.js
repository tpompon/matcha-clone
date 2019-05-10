import React from "react"
import { withRouter } from "react-router-dom"

const Disconnect = ({ history }) => (
    <button onClick={ () => history.push("/LoginAccount") }>Disconnect</button>
)

export default withRouter(Disconnect)