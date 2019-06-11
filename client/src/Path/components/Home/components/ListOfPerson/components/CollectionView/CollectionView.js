import React, { Component } from "react"

import PreviewProfil from "./components/PreviewProfil"

import { calculDistance } from "utils/fileProvider"

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
            ageMin: "",
            ageMax: "",
            distanceMin: "",
            distanceMax: "",
            populareScoreMin: "",
            populareScoreMax: "",
        }
    }

    componentWillMount() {
        const { listPerson } = this.props
        this.setState({ listProfil: listPerson })
    }

    filterList = () => {
        const { listPerson } = this.props
        let newListPerson = this.filterAge(listPerson)
        newListPerson = this.filterLocation(newListPerson)
        newListPerson = this.filterTag(newListPerson)
        newListPerson = this.filterPopularScore(newListPerson)
        this.setState({ listProfil: newListPerson })
    }

    filterAge = (array) => {
        const { ageMin, ageMax } = this.state
        if (ageMin === ""|| ageMax === "") {
            return array
        }
        const newListPerson = []
        array.forEach((data) => {
            if (data.age >= ageMin && data.age <= ageMax) {
                newListPerson.push(data)
            }
        })
        return newListPerson
    }

    filterLocation = (array) => {
        const { userLocation, userApproximateLocation } = this.props.dataUser
        const { distanceMin, distanceMax } = this.state
        if (distanceMin === "" || distanceMax === "") {
            return array
        }   
        const userCoords = (userLocation !== null) ? userLocation.split(", ") : userApproximateLocation.split(", ")
        const newListPerson = []
        array.forEach((data) => {
            const profilCoords = (data.userLocation !== null) ? data.userLocation.split(", ") : data.userApproximateLocation.split(", ")
            const distance = calculDistance(userCoords[0], userCoords[1], profilCoords[0], profilCoords[1])
            if (distanceMin <= distance && distanceMax >= distance) {
                newListPerson.push(data)
            }
        })
        return newListPerson
    }

    chooseTag = (tag) => {
        const { listTag } = this.state
        if (listTag.indexOf(tag) === -1) {
            this.setState({ listTag: this.state.listTag + tag }, () => this.filterList())
        } else {
            this.setState({ listTag: this.state.listTag.replace(tag, "") }, () => this.filterList())
        }
    }

    filterTag = (array) => {
        const { listTag } = this.state
        if (listTag === "") {
            return array
        }
        const newListPerson = []
        array.forEach((data) => {
            if (data.listInterest !== null) {
                const listInterestProfil = listTag.split("#")
                listInterestProfil.splice(0, 1)
                let absTag = 1
                listInterestProfil.forEach((tag) => {
                    if (data.listInterest.indexOf(tag) === -1) {
                        absTag = 0
                    }
                })
                if (absTag === 1) {
                    newListPerson.push(data)
                }
            }
        })
        return newListPerson
    }

    filterPopularScore = (array) => {
        const { populareScoreMin, populareScoreMax } = this.state
        if (populareScoreMin === "" || populareScoreMax === "") {
            return array
        }
        const newListPerson = []
        array.forEach((data) => {
            if (populareScoreMin <= data.populareScore && populareScoreMax >= data.populareScore) {
                newListPerson.push(data)
            }
        })
        return newListPerson
    }

    render() {
        const { chooseDataPerson } = this.props
        const {
            listProfil, ageMin, ageMax, distanceMin, distanceMax, listTag,
            populareScoreMin, populareScoreMax,
        } = this.state
        return (
            <div>
                <input type="number" placeholder="ageMin" value={ ageMin } onChange={ (e) => this.setState({ ageMin: e.target.value }) } />
                <input type="number" placeholder="ageMax" value={ ageMax } onChange={ (e) => this.setState({ ageMax: e.target.value }) } />
                <button onClick={ () => this.filterList() }>Filter age</button>
                <input type="number" placeholder="distanceMin" value={ distanceMin } onChange={ (e) => this.setState({ distanceMin: e.target.value }) } />
                <input type="number" placeholder="distanceMax" value={ distanceMax } onChange={ (e) => this.setState({ distanceMax: e.target.value }) } />
                <button onClick={ () => this.filterList() }>Filter distance</button>
                <input type="number" placeholder="Score min" value={ populareScoreMin } onChange={ (e) => this.setState({ populareScoreMin: e.target.value }) } />
                <input type="number" placeholder="Score max" value={ populareScoreMax } onChange={ (e) => this.setState({ populareScoreMax: e.target.value }) } />
                <button onClick={ () => this.filterList() }>Filter populare score</button>
                <div>
                    {
                        listTagArray.map((tag) => (
                            <button
                                key={ `tag-${tag}` }
                                onClick={ () => this.chooseTag(tag) }
                                style={ { color: (listTag.indexOf(tag) !== -1) ? "red" : null } }
                            >
                                { tag }
                            </button>
                        ))
                    }
                </div>
                <div>
                    {
                        listProfil.map((data) => (
                            <div key={ `PreviewProfil-${data.id}` }>
                                <PreviewProfil
                                    data={ data }
                                    chooseDataPerson={ chooseDataPerson }
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }

}

export default CollectionView