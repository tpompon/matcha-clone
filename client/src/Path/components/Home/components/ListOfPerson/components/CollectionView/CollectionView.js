import React, { Component } from "react"

import PreviewProfil from "./components/PreviewProfil"

import { getUsers } from "utils/fileProvider"

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
            listPerson: null,
            listTag: [],
        }
    }

    componentWillMount() {
        const { dataUser } = this.props
        getUsers()
            .then((listUsers) => {
                let listPerson = {}
                listUsers.data.forEach((user) => {
                    if (user.id !== dataUser.id) {
                        listPerson = {
                            ...listPerson,
                            [user.id]: user,
                        }
                    }
                })
                this.setState({ listPerson })
            })
            .catch((error) => console.log(error))
    }

    chooseTag = (tag) => {
        const { listTag } = this.state
        if (listTag.indexOf(tag) === -1) {
            this.setState({ listTag: this.state.listTag + tag }, () => this.listTagFilter())
        } else {
            this.setState({ listTag: this.state.listTag.replace(tag, "") }, () => this.listTagFilter())
        }
    }

    listTagFilter = () => {
        getUsers()
            .then((listUsers) => {
                const { listTag } = this.state
                const listTagFilter = listTag.split("#")
                listTagFilter.splice(0, 1)
                if (listTagFilter.length === 0) {
                    const { dataUser } = this.props
                    let listPerson = {}
                    listUsers.data.forEach((user) => {
                        if (user.id !== dataUser.id) {
                            listPerson = {
                                ...listPerson,
                                [user.id]: user,
                            }
                        }
                    })
                    this.setState({ listPerson })
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
                    this.setState({ listPerson: newListPersonWithFilterTag })
                })
            }
        })
        .catch((error) => console.log(error))
    }

    render() {
        const { chooseDataPerson } = this.props
        const { listPerson } = this.state
        if (listPerson === null) {
            return <div />
        }
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
                        Object.entries(listPerson).map((entry) => (
                            <PreviewProfil
                                key={ `PreviewProfil-${entry[0]}` }
                                data={ entry[1] }
                                chooseDataPerson={ chooseDataPerson }
                            />
                        ))
                    }
                </div>
            </div>
        )
    }

}

export default CollectionView