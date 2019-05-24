import React from "react"

import LikeButtons from "components/LikeButtons"

const LikeUser = ({ likeUser, user, profilName }) => (
    <div>
        {
            (likeUser !== undefined)
                ? (
                    <div>
                        {
                            (likeUser === 1)
                                ? `This user like you`
                                : `This user unlike you`
                        }
                    </div>
                )
                : null
        }
        <LikeButtons
            user={ user }
            profilName={ profilName }
        />
    </div>
)

export default LikeUser