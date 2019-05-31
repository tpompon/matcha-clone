import React, { Component } from "react"

import Images from "./components/Images"
import DataProfil from "./components/DataProfil"
import DataPersonal from "./components/DataPersonal"
import LikeUser from "./components/LikeUser"

import { blockProfil, reportingFakeProfil, getPopularScoreOfProfil } from "utils/fileProvider"

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
            fakeUser, inline, date,
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
                                    id={ id }
                                    likeUser={ likeUser }
                                    user={ dataUser.userName }
                                    profilName={ userName }
                                />
                                <p>
                                    {
                                        (inline === 0)
                                            ? `This user is deconnected. His last connection are ${date}`
                                            : `This user is connected`
                                    }
                                </p>
                                <button onClick={ () => this.onClick() }>
                                    Block this profil
                                </button>
                                <button onClick={ () => reportingFakeProfil(userName) }>
                                    Report this user like a fake profil
                                </button>
                                {
                                    (fakeUser !== undefined)
                                        ? "This profil is potentially a fake Profil"
                                        : null
                                }
                                <button onClick={ () => getPopularScoreOfProfil(userName) }>Popular score</button>
                            </div>
                        )
                        : <div>This profil is blocked</div>
                }
            </div>
        )
    }

}

export default InfosPerson