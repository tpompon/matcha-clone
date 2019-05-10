import React, { Component } from "react"
import Geocode from "react-geocode"

const apiKey = "AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU"

Geocode.setApiKey(apiKey)

class Geolocation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            coordinate: {
                lat: "",
                lng: "",
            },
            inputValue: "",
            address: "",
        }
    }

    componentDidMount() {
        this.getAddressFromLatLong(50.450, -0.15654);
      }
      
      getAddressFromLatLong(lat, long) {
        Geocode.fromLatLng(lat, long).then(
          response => {
            this.setState({
              address: response.results[0].formatted_address
            })
          },
          error => {
            this.setState({
              address: error.message
            })
          }
        );
      }

    getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                coordinate: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                },
            })
        })
    }

    getCoordinates = () => {
        const { inputValue } = this.state
        Geocode.fromAddress("tour eiffel")
            .then((response) => {
                const { lat, lng } = response.results[0].geometry.location
                console.log(lat, lng)
            })
            .catch((error) => console.log(error))
    }

    render () {
        return (
            <div>
                <div>
                    <input type="text" value={ this.state.inputValue } onChange={ (e) => this.setState({ inputValue: e.target.value }) } />
                    <button onClick={ () => this.getCoordinates() }>Send address</button>
                </div>
                <div><button onClick={ () => this.getLocation() }>Ok</button></div>
            </div>
        )
    }
}

export default Geolocation
