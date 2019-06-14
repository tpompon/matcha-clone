import React, { Component } from "react"
import L from "leaflet"
import * as ELG from "esri-leaflet-geocoder"
import { Map, TileLayer } from "react-leaflet"

import { setNewLocation } from "utils/fileProvider"

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png",
})

class MapComp extends Component {

    constructor(props) {
        super(props)
        this.state = { center: [48.866667, 2.33333] }
    }

    componentWillMount() {
        const { userLocation, userApproximateCity } = this.props
        let coords
        if (userLocation === null) {
            ELG.geocode().text(userApproximateCity)
                .run((error, results) => {
                    if (error) {
                        console.log(error)
                    } else {
                        coords = [results.results[0].latlng.lat, results.results[0].latlng.lng]
                        this.setState({ center: coords })
                    }
                })
        } else {
            coords = userLocation.split(", ")
            this.setState({ center: coords })
        }
    }

    componentDidMount() {
        const { userName } = this.props
        const { center } = this.state
        const map = this.leafleMap.leafletElement
        const searchControl = new ELG.Geosearch({
            useMapBounds: false,
            position: "topright",
            collapseAfterResult: false,
            expanded: true,
        }).addTo(map)
        const results = new L.LayerGroup().addTo(map)
        results.addLayer(L.marker({ lat: center[0], lng: center[1] }))
        searchControl.on("results", (data) => {
            results.clearLayers()
            for (let i = data.results.length - 1; i >= 0; i--) {
                results.addLayer(L.marker(data.results[i].latlng))
                setNewLocation(userName, `${data.results[i].latlng.lat}, ${data.results[i].latlng.lng}`, data.results[i].text)
            }
        })
    }

    render() {
        const { userLocation } = this.props
        const { center } = this.state
        return (
            <Map
                style={ { height: "100%" } }
                center={ center }
                zoom={ (userLocation === null) ? "10" : "17" }
                maxZoom="19"
                ref={ (map) => { this.leafleMap = map } }
            >
                <TileLayer
                    attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
                    url={ "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" }
                />
                <div className="pointer" />
            </Map>
        )
    }

}

export default MapComp