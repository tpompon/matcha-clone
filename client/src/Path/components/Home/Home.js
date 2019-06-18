import React, { Component } from "react"
import * as ELG from "esri-leaflet-geocoder"

import EditProfil from "./components/EditProfil"
import Disconnect from "./components/Disconnect"
import ListOfPerson from "./components/ListOfPerson"
import ListProfilBlock from "./components/ListProfilBlock"
import Chat from "./components/Chat"
import Notifications from "./components/Notifications"

import {
    getNotificationsNoRead, /*userIsDeLog,*/ getUserProfil, getLocation,
    setLocation, getUserApproximateLocation,setUserApproximateLocation, setLocationToNull,
} from "utils/fileProvider"

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
            dataUser: undefined,
        }
        this.mounted = true
    }

    componentWillMount() {
        const { state } = this.props.location
        if (state === undefined) {
            return
        }
        const { dataUser } = state
        getLocation(dataUser.userName, dataUser.id)
            .then((response) => {
                console.log("test")
                ELG.reverseGeocode()
                    .latlng([response.coords.latitude, response.coords.longitude])
                    .run((error, results) => {
                        if (error) {
                            return error
                        } else {
                            const dataAddress = {
                                coords: `${results.latlng.lat} , ${results.latlng.lng}`,
                                address: results.address.LongLabel,

                            }
                            setLocation(dataUser.userName, dataAddress)
                            this.setState({
                                dataUser: {
                                    ...this.state.dataUser,
                                    userLocation: dataAddress.coords,
                                    userAddress: dataAddress.address,
                                },
                            })
                        }
                    })
            })
            .catch(() => setLocationToNull(dataUser.userName))
        getUserApproximateLocation()
            .then((response) => {
                ELG.geocode().text(response.city)
                    .run((error, results) => {
                        if (error) {
                            console.log(error)
                        } else {
                            const dataApproximateAddress = {
                                coords: `${results.results[0].latlng.lat}, ${results.results[0].latlng.lng}`,
                                city: results.results[0].text,
                            }
                            setUserApproximateLocation(dataUser.userName, dataApproximateAddress)
                            this.setState({
                                dataUser: {
                                    ...this.state.dataUser,
                                    userApproximateLocation: dataApproximateAddress.coords,
                                    userApproximateCity: dataApproximateAddress.city,
                                },
                            })
                        }
                    })
            })
            .catch((error) => console.log(error))
        getUserProfil(dataUser.id)
            .then((response) => this.setState({ dataUser: response.data[0] }))
            .catch((error) => console.log(error))
        this.setState({ dataUser })
        /*
        window.onunload = window.onbeforeunload = () => {
            userIsDeLog(dataUser.userName)
        }
        */
    }

    componentDidMount() {
        this.timeout = setInterval(() => this.showNotifications(), 1000)
    }

    componentWillUnmount() {
        this.mounted = false
        clearInterval(this.timeout)
    }

    showNotifications = () => {
        const { dataUser } = this.state
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

    updateDataUser = (updateDataUser) => {
        const { dataUser } = this.state
        this.setState({
            dataUser: {
                ...dataUser,
                ...updateDataUser,
            }
        })
    }

    choosenOption = () => {
        const { showOption, notificationsArray, dataUser } = this.state
        const { userName } = dataUser
        switch (showOption) {
            
            case "Edit profil":
                return <EditProfil dataUser={ dataUser } updateDataUser={ this.updateDataUser } />

            case "List of person":
                return <ListOfPerson dataUser={ dataUser } />
            
            case "List Profil Block":
                return <ListProfilBlock userName={ userName } />

            case "Chat":
                return <Chat userName={ userName } />

            case "Notifications":
                return <Notifications notificationsArray={ notificationsArray } userName={ userName } />

            default:
                return null

        }
    }

    render() {
        const { history } = this.props
        const { notificationsArray, dataUser } = this.state
        if (dataUser === undefined) {
            history.push("/LoginAccount")
            return <div />
        }
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
                <Disconnect userName={ dataUser.userName } />
                { this.choosenOption() }
            </div>
        )
    }

}
 
export default Home