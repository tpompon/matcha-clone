import React, { Component } from "react"

import EditProfil from "./components/EditProfil"
import Disconnect from "./components/Disconnect"
import ListOfPerson from "./components/ListOfPerson"
import ListProfilBlock from "./components/ListProfilBlock"
import Chat from "./components/Chat"
import Notifications from "./components/Notifications"

import { getNotificationsNoRead, userIsDeLog } from "utils/fileProvider"

const optionsArray = [
    "Edit profil",
    "List of person",
    "List Profil Block",
    "Chat",
    "Notifications",
]

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showOption: "",
            notificationsArray: [],
        }
        this.mounted = true
    }

    componentWillMount() {
        window.onunload = window.onbeforeunload = () => {
            const { location } = this.props
            const { dataUser } = location.state
            userIsDeLog(dataUser.userName)
        }
    }

    componentDidMount() {
        this.timeout = setInterval(() => this.showNotifications(), 1000)
    }

    componentWillUnmount() {
        this.mounted = false
        clearInterval(this.timeout)
    }

    showNotifications = () => {
        const { location } = this.props
        const { dataUser } = location.state
        if (dataUser === undefined) {
            return
        }
        getNotificationsNoRead(dataUser.userName)
            .then((notificationsArray) => {
                if (this.mounted === true) {
                    this.setState({ notificationsArray: notificationsArray.notifications })
                }
            })
            .catch((error) => console.log(error))
    }

    choosenOption = () => {
        const { location } = this.props
        const { dataUser } = location.state
        const { showOption, notificationsArray } = this.state
        switch (showOption) {
            
            case "Edit profil":
                return <EditProfil dataUser={ dataUser } />

            case "List of person":
                return <ListOfPerson dataUser={ dataUser } />
            
            case "List Profil Block":
                return <ListProfilBlock userName={ dataUser.userName } />

            case "Chat":
                return <Chat userName={ dataUser.userName } />

            case "Notifications":
                return (
                    <Notifications
                        notificationsArray={ notificationsArray }
                        userName={ dataUser.userName }
                    />
                )

            default:
                return null

        }
    }

    render() {
        const { history, location } = this.props
        const { state } = location
        if (state === undefined) {
            history.push("/LoginAccount")
            return <div />
        }
        const { notificationsArray } = this.state
        return (
            <div>
                {
                    optionsArray.map((option) => (
                        <button
                            key={ `option-${option}` }
                            onClick={ () => this.setState({ showOption: option }) }
                        >
                            { (option === "Notifications") ? `${notificationsArray.length}, ${option}` : option }
                        </button>
                    ))
                }
                <Disconnect userName={ state.dataUser.userName } />
                {
                    this.choosenOption()
                }
            </div>
        )
    }

}
 
export default Home