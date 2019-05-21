import React, { Component } from "react"

import { likeOrUnkikeUser } from "utils/fileProvider"

class LikeButtons extends Component {

    render() {
        const { user, profilName } = this.props
        return (
            <div>
                <button onClick={ () => likeOrUnkikeUser(user, profilName, 1) }>Like</button>
                <button onClick={ () => likeOrUnkikeUser(user, profilName, -1) }>Unlike</button>
            </div>
        )
    }

}

export default LikeButtons