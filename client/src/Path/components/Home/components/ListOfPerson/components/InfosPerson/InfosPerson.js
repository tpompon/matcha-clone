import React, { Component } from "react"

import Images from "./components/Images"
import DataProfil from "./components/DataProfil"
import DataPersonal from "./components/DataPersonal"
import LikeUser from "./components/LikeUser"

import { blockProfil } from "utils/fileProvider"

class InfosPerson extends Component {

    constructor(props) {
        super(props)
        this.state = { blocked: false }
    }
    
    componentWillReceiveProps(nextProps) {
        const { dataPerson } = nextProps
        if (this.props.dataPerson !== dataPerson) {
            this.setState({ blocked: false })
        }
    }

    onClick = () => {
        const { dataPerson, dataUser, getListUser } = this.props
        blockProfil(dataUser.userName, dataPerson.userName)
        getListUser()
        this.setState({ blocked: true })
    }

    render() {
        const { dataPerson, dataUser } = this.props
        if (dataPerson === null) {
            return <div />
        }
        const { blocked } = this.state
        const {
            id, userName, lastName, firstName, biography,
            listInterest, genderOptionChecked, orientationOptionChecked, likeUser,
        } = dataPerson
        const dataProfil = { userName, lastName, firstName }
        const dataPersonal = {
            biography, listInterest, genderOptionChecked, orientationOptionChecked,
        }
        return (
            <div>
                {
                    (blocked === false)
                        ? (
                            <div>
                                <Images id={ id } />
                                <DataProfil dataProfil={ dataProfil } />
                                <DataPersonal dataPersonal={ dataPersonal } />
                                <LikeUser
                                    likeUser={ likeUser }
                                    user={ dataUser.userName }
                                    profilName={ userName }
                                />
                                <button onClick={ () => this.onClick() }>
                                    Block this profil
                                </button>
                            </div>
                        )
                        : <div>This profil is blocked</div>
                }
            </div>
        )
    }

}

export default InfosPerson