import React, { Component } from "react"

import { updateNotificationsToRead } from "utils/fileProvider"

class Notifications extends Component {

    componentWillUnmount() {
        const { userName } = this.props
        updateNotificationsToRead(userName)
    }

    render() {
        const { notificationsArray } = this.props
        return (
            <div>
                {
                    (notificationsArray !== null)
                        ? (
                            notificationsArray.map((notification) => (
                                <p key={ `notification-${notification.id}` }>{ notification.notificationType }</p>
                            ))
                        )
                        : `No new notifications for you`
                }
            </div>
        )
    }

}

export default Notifications