import React, { Component } from "react"

import { likeOrUnkikeUser } from "utils/fileProvider"

class LikeButtons extends Component {

    render() {
        const { user, profilName, isLikable } = this.props
        return (
            <div>
                <button onClick={ (isLikable === true) ? () => likeOrUnkikeUser(user, profilName, 1) : null }>Like</button>
                <button onClick={ (isLikable === true) ? () => likeOrUnkikeUser(user, profilName, -1) : null }>Unlike</button>
            </div>
        )
    }

}

export default LikeButtons