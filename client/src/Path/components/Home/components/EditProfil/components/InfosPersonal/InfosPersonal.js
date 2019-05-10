import React, { Component } from "react"
// import PropTypes from "prop-types"

import Biography from "./components/Biography"
import ListInterest from "./components/ListInterest"
import Orientation from "./components/Orientation"
import Gender from "./components/Gender"
import Pictures from "./components/Pictures"

import { saveInfosPersonal } from "utils/fileProvider"

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
            biography, genderOptionChecked, orientationOptionChecked, listInterest,
        } = infosUser
        this.setState({
            ...this.state,
            infosPersonalUser: {
                biography, genderOptionChecked, orientationOptionChecked, listInterest,
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

    render() {
        const { infosUser } = this.props
        const { id } = infosUser
        const { infosPersonalUser } = this.state
        const {
            orientationOptionChecked, genderOptionChecked, biography, listInterest,
        } = infosPersonalUser
        return (
            <div>
                <Orientation
                    onChangeValue={ this.onChangeValue }
                    optionChecked={ orientationOptionChecked }
                />
                <Gender
                    onChangeValue={ this.onChangeValue }
                    optionChecked={ genderOptionChecked }
                />
                <Biography
                    onChangeValue={ this.onChangeValue }
                    value={ biography }
                />
                <ListInterest
                    onChangeValue={ this.updateListInterest }
                    list={ listInterest }
                />
                <Pictures userId={ id } />
                <button onClick={ () => saveInfosPersonal({ ...infosPersonalUser, id }) }>Save</button>
            </div>
        )
    }

}

// InfosPersonal.propTypes = {}

export default InfosPersonal