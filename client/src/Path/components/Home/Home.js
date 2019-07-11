import React, { Component } from "react"
import * as ELG from "esri-leaflet-geocoder"

import EditProfil from "./components/EditProfil"
import ListOfPerson from "./components/ListOfPerson"
import ListProfilBlock from "./components/ListProfilBlock"
import Chat from "./components/Chat"
import Notifications from "./components/Notifications"
import Loader from "components/Loader"
import Header from "components/Header"

import {
    getNotificationsNoRead, getUserProfil, getLocation,
    setLocation, getUserApproximateLocation, setLocationToNull,
} from "utils/fileProvider"

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            displayPage: "",
            notificationsArray: [],
            dataUser: undefined,
            loadGeolocalistationSuccess: false,
            loadGeolocalistationApproximateSuccess: false,
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
                                .then(() => this.setState({
                                    ...this.state,
                                    dataUser: {
                                        ...this.state.dataUser,
                                        userLocation: dataAddress.coords,
                                        userAddress: dataAddress.address,
                                    },
                                    loadGeolocalistationSuccess: true,
                                }))
                                .catch((error) => console.log(error))
                        }
                    })
            })
            .catch(() => {
                setLocationToNull(dataUser.userName)
                    .then(() => this.setState({ ...this.state, loadGeolocalistationSuccess: true }))
                    .catch((error) => console.log(error))
            })
        getUserApproximateLocation(dataUser.userName)
            .then((response) => {
                this.setState({
                    ...this.state,
                    dataUser: {
                        ...this.state.dataUser,
                        userApproximateLocation: response.approximateLocation,
                        userApproximateCity: response.userApproximateCity,
                    },
                    loadGeolocalistationApproximateSuccess: true,
                })
            })
            .catch((error) => console.log(error))
        getUserProfil(dataUser.id)
            .then((response) => this.setState({ dataUser: response.data[0] }))
            .catch((error) => console.log(error))
        this.setState({ dataUser })
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
        const { displayPage, notificationsArray, dataUser } = this.state
        const { userName } = dataUser
        switch (displayPage) {
            
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

    displayPage = (page) => {
        this.setState({ displayPage: page })
    }

    render() {
        const { history } = this.props
        const {
            notificationsArray, dataUser, loadGeolocalistationSuccess, loadGeolocalistationApproximateSuccess,
        } = this.state
        if (dataUser === undefined) {
            history.push("/LoginAccount")
            return <div />
        }
        if (loadGeolocalistationSuccess !== true || loadGeolocalistationApproximateSuccess !== true) {
            return (<Loader />)
        }
        return (
            <div>
                <Header
                    notificationsArray={ notificationsArray }
                    displayPage={ this.displayPage }
                    dataUser={ dataUser }
                />
                { this.choosenOption() }
            </div>
        )
    }

}
 
export default Home
