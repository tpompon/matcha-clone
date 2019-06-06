import React, { Component } from "react"

class GeocodingForm extends Component {

    constructor(props) {
        super(props)
        this.state = { isLocating: false }
    }
    handleGeoLocation = () => {
        const geolocation = navigator.geolocation
        const getLocation = new Promise((resolve, reject) => {
            if (!geolocation) {
                reject(new Error("Not supported !"))
            }
            this.setState({ isLocating: true })
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
                this.setState({ isLocating: false }, () => 
                    this.props.onChange("query", `${location.coords.latitude}, ${location.coords.longitude}`)
                )
            })
            .catch((error) => console.log(error))
    }

    handleSubmit = (e) => {
        console.log("Form was submitted with state: ", this.state)
        e.preventDefault()
    }

    render() {
        const {
            apiKey, /*isSubmitting,*/ query, onChange, onSubmit,
        } = this.props
        // const { isLocating } = this.state
        return (
            <div>
                <p>{ `apiKey: ${apiKey}` }</p>
                <input
                    type="text"
                    value={ query }
                    onChange={ (e) => onChange("query", e.target.value) }
                />
                <button onClick={ () => this.handleGeoLocation() }>handleGeoLocation</button>
                <button onClick={ (e) => onSubmit(e) }>Geocode</button>
            </div>
        )
    }

}

export default GeocodingForm