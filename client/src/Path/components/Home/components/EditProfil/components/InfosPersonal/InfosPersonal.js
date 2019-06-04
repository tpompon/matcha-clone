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
            biography, gender, orientation, listInterest,
        } = infosUser
        this.setState({
            ...this.state,
            infosPersonalUser: {
                biography, gender, orientation, listInterest,
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
        const { userName, id } = infosUser
        const { infosPersonalUser } = this.state
        const {
            orientation, gender, biography, listInterest,
        } = infosPersonalUser
        return (
            <div>
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
                <ListInterest
                    onChangeValue={ this.updateListInterest }
                    list={ listInterest }
                />
                <Pictures userId={ id } userName={ userName } />
                <button onClick={ () => saveInfosPersonal({ ...infosPersonalUser, userName }) }>Save</button>
            </div>
        )
    }

}

// InfosPersonal.propTypes = {}

export default InfosPersonal