import React, { Component } from "react"

import PreviewProfil from "./components/PreviewProfil"
import LikeButtons from "components/LikeButtons"

const listTagArray = [
    "#Movie",
    "#Manga",
    "#Sport",
    "#NigthParty",
    "#data processing",
]

class CollectionView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listProfil: null,
            listTag: "",
        }
    }

    componentWillMount() {
        const { listPerson } = this.props
        this.setState({ listProfil: listPerson })
    }

    componentWillReceiveProps(nextProps) {
        const { listPerson } = nextProps
        if (this.props.listPerson !== listPerson) {
            this.listTagFilter(listPerson)
        }
    }

    chooseTag = (tag) => {
        const { listPerson } = this.props
        const { listTag } = this.state
        if (listTag.indexOf(tag) === -1) {
            this.setState({ listTag: this.state.listTag + tag }, () => this.listTagFilter(listPerson))
        } else {
            this.setState({ listTag: this.state.listTag.replace(tag, "") }, () => this.listTagFilter(listPerson))
        }
    }

    listTagFilter = (listPerson) => {
        const { listTag } = this.state
        let newListProfil = {}
        if (listTag === "") {
            const { dataUser } = this.props
            Object.entries(listPerson).forEach((entry) => {
                if (entry[1].id !== dataUser.id) {
                    newListProfil = {
                        ...newListProfil,
                        [entry[1].id]: entry[1],
                    }
                }
            })
        } else {
            Object.entries(listPerson).forEach((entry) => {
                if (entry[1].listInterest !== null) {
                    const listInterestProfil = listTag.split("#")
                    listInterestProfil.splice(0, 1)
                    let absTag = 1
                    listInterestProfil.forEach((tag) => {
                        if (entry[1].listInterest.indexOf(tag) === -1) {
                            absTag = 0
                        }
                    })
                    if (absTag === 1) {
                        newListProfil = {
                            ...newListProfil,
                            [entry[1].id]: entry[1]
                        }
                    }
                }
            })
        }
        this.setState({ listProfil: newListProfil })
    }

    render() {
        const { chooseDataPerson, dataUser } = this.props
        const { listProfil } = this.state
        return (
            <div>
                <div>
                    {
                        listTagArray.map((tag) => (
                            <button
                                key={ `tag-${tag}` }
                                onClick={ () => this.chooseTag(tag) }
                            >
                                { tag }
                            </button>
                        ))
                    }
                </div>
                <div>
                    {
                        Object.entries(listProfil).map((entry) => (
                            <div key={ `PreviewProfil-${entry[0]}` }>
                                <PreviewProfil
                                    data={ entry[1] }
                                    chooseDataPerson={ chooseDataPerson }
                                />
                                <LikeButtons
                                    user={ dataUser.userName }
                                    profilName={ entry[1].userName }
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

}

/*
        getUsers()
            .then((listUsers) => {
                const { listTag } = this.state
                const listTagFilter = listTag.split("#")
                listTagFilter.splice(0, 1)
                if (listTagFilter.length === 0) {
                    const { dataUser } = this.props
                    let listProfil = {}
                    listUsers.data.forEach((user) => {
                        if (user.id !== dataUser.id) {
                            listProfil = {
                                ...listProfil,
                                [user.id]: user,
                            }
                        }
                    })
                    this.setState({ listProfil })
                } else {
                    let newListPersonWithFilterTag = {}
                    listUsers.data.forEach((user) => {
                        listTagFilter.forEach((tag) => {
                            if (user.listInterest !== null && user.listInterest.indexOf(tag) !== -1) {
                                newListPersonWithFilterTag = {
                                    ...newListPersonWithFilterTag,
                                    [user.id]: user,
                                }
                            }
                    })
                    this.setState({ listProfil: newListPersonWithFilterTag })
                })
            }
        })
        .catch((error) => console.log(error))
        */

export default CollectionView