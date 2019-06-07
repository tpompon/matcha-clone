import React, { Component } from "react"

import GeocodingForm from "./components/GeocodingForm"
import GeocodingResults from "./components/GeocodingResults"

import * as Opencage from "opencage-api-client"

const apiKey = "54b379950fdd4dbeb5c56bc93a60afa9"

class Geolocation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isSubmitting: false,
            query: "",
            response: {},
        }
    }

    componentWillMount() {
        fetch("https://geoip-db.com/json/{ipv4-address}")
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch((error) => console.log(error))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { query } = this.state
        this.setState({ isSubmitting: true })
        Opencage
            .geocode({ key: apiKey, q: query })
            .then((response) => this.setState({ response, isSubmitting: false }))
            .catch((error) => {
                console.log(error)
                this.setState({
                    response: {},
                    isSubmitting: false,
                })
            })
    }

    handleChange = (key, value) => {
        this.setState({ [key]: value })
    }

    render() {
        const { query, isSubmitting, response } = this.state
        return (
            <div>
                <div>
                    <GeocodingForm
                        apiKey={ apiKey }
                        isSubmitting={ isSubmitting }
                        query={ query }
                        onChange={ this.handleChange }
                        onSubmit={ this.handleSubmit }
                    />
                </div>
                <div>
                    <GeocodingResults response={ response } />
                </div>
            </div>
        )
    }

}

export default Geolocation