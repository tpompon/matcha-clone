import React, { Component } from "react"

import CollectionView from "./components/CollectionView"
import InfosPerson from "./components/InfosPerson"

import { getUsers, blockList } from "utils/fileProvider"

const styles = {
    container: {
        display: "flex",
    },
    infosPerson: {
        width: "70%",
    },
    collectionView: {
        width: "30%",
    },
}

class ListOfPerson extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listPerson: null,
            dataPerson: null,
        }
    }

    componentWillMount() {
        this.getListUser()
    }

    getListUser = () => {
        const { dataUser } = this.props
        getUsers()
            .then((listUsers) => {
                blockList(dataUser.userName)
                    .then((listProfilBlock) => {
                        let listPerson = {}
                        let profilIsBlocked
                        listUsers.data.forEach((user) => {
                            profilIsBlocked = 0
                            for (let i = 0; i < listProfilBlock.length; i++) {
                                if (listProfilBlock[i] === user.userName) {
                                    profilIsBlocked = 1
                                    break
                                }
                            }
                            if (user.id !== dataUser.id && profilIsBlocked === 0) {
                                listPerson = {
                                    ...listPerson,
                                    [user.id]: user,
                                }
                            }
                        })
                        this.setState({ listPerson })
                    }
                )
                .catch((error) => console.log(error))
            })
            .catch((error) => console.log(error))
    }

    chooseDataPerson = (dataPerson) => {
        this.setState({ dataPerson })
    }

    render() {
        const { dataUser } = this.props
        const { dataPerson, listPerson } = this.state
        if (listPerson === null) {
            return <div />
        }
        return (
            <div style={ styles.container }>
                <div style={ styles.infosPerson }>
                    <InfosPerson
                        dataUser={ dataUser }
                        dataPerson={ dataPerson }
                        getListUser={ this.getListUser }
                    />
                </div>
                <div style={ styles.collectionView }>
                    <CollectionView
                        dataUser={ dataUser }
                        listPerson={ listPerson }
                        chooseDataPerson={ this.chooseDataPerson }
                    />
                </div>
            </div>
        )
    }

}

export default ListOfPerson