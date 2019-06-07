import React, { Component } from "react"

class GeocodingForm extends Component {

    constructor(props) {
        super(props)
        this.state = { isLocating: false }
    }

    componentWillMount() {
        this.handleGeoLocation()
    }

    handleGeoLocation = () => {
        const geolocation = navigator.geolocation
        const getLocation = new Promise((resolve, reject) => {
            if (!geolocation) {
                reject(new Error("Not supported !"))
            }
            geolocation.getCurrentPosition((position) => {
                console.log("Location found !")
                resolve(position)
            }, () => {
                console.log("Location: Permission denied !")
                reject(new Error("Permission denied !"))
            })
        })
        getLocation
            .then((location) => {
                console.log(`${location}, ${location.coords.latitude}, ${location.coords.longitude}`)
            })
            .catch((error) => console.log(error))
    }

    render() {
        const {
            apiKey, query, onChange, onSubmit,
        } = this.props
        return (
            <div>
                <p>{ `apiKey: ${apiKey}` }</p>
                <input
                    type="text"
                    value={ query }
                    onChange={ (e) => onChange("query", e.target.value) }
                />
                <button onClick={ (e) => onSubmit(e) }>Geocode</button>
            </div>
        )
    }

}

export default GeocodingForm