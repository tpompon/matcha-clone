import React, { Component } from "react"
// import PropTypes from "prop-types"

import Age from "./components/Age"
import Biography from "./components/Biography"
import ListInterest from "./components/ListInterest"
import Orientation from "./components/Orientation"
import Gender from "./components/Gender"
import Pictures from "./components/Pictures"
import NewLocation from "./components/NewLocation"

import { updateInfosPersonal } from "utils/fileProvider"

class InfosPersonal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            infosPersonalUser: {},
        }
    }

    componentWillMount() {
        const { infosUser } = this.props
        const {
            age, biography, gender, orientation,
            listInterest, userAddress,
        } = infosUser
        this.setState({
            ...this.state,
            infosPersonalUser: {
                age, biography, gender, orientation,
                listInterest, userAddress,
            },
        })
    }

    onChangeValue = (e, option) => {
        this.setState({
            ...this.state,
            infosPersonalUser: {
                ...this.state.infosPersonalUser,
                [option]: e.target.value,
            },
        })
    }

    updateListInterest = (newlistInterest) => {
        this.setState({
            ...this.state,
            infosPersonalUser: {
                ...this.state.infosPersonalUser,
                listInterest: newlistInterest,
            },
        })
    }

    onClick = (infosPersonalUser, userName) => {
        const { updateDataUser } = this.props
        updateInfosPersonal({ ...infosPersonalUser, userName })
        updateDataUser(infosPersonalUser)
    }

    render() {
        const { infosUser } = this.props
        const { userName, id } = infosUser
        const { infosPersonalUser } = this.state
        const {
            age, orientation, gender, biography,
            listInterest, userAddress,
        } = infosPersonalUser
        return (
            <div>
                <Age
                    onChangeValue={ this.onChangeValue }
                    age={ age }
                />
                <Orientation
                    onChangeValue={ this.onChangeValue }
                    optionChecked={ orientation }
                />
                <Gender
                    onChangeValue={ this.onChangeValue }
                    optionChecked={ gender }
                />
                <Biography
                    onChangeValue={ this.onChangeValue }
                    value={ biography }
                />
                <NewLocation
                    userName={ userName }
                    userAddress={ userAddress }
                />
                <ListInterest
                    onChangeValue={ this.updateListInterest }
                    list={ listInterest }
                />
                <Pictures userId={ id } userName={ userName } />
                <button onClick={ () => this.onClick(infosPersonalUser, userName) }>Save</button>
            </div>
        )
    }

}

// InfosPersonal.propTypes = {}

export default InfosPersonal