import React, { Component } from 'react';
import L from 'leaflet';
import * as ELG from 'esri-leaflet-geocoder';
import { Map, TileLayer } from 'react-leaflet';

class Maps extends Component {

    componentDidMount() {
        const map = this.leafletMap.leafletElement;
        const searchControl = new ELG.Geosearch().addTo(map);
        const results = new L.LayerGroup().addTo(map);
    
        searchControl.on('results', function(data){
            results.clearLayers();
            for (let i = data.results.length - 1; i >= 0; i--) {
                results.addLayer(L.marker(data.results[i].latlng));
            }
        });
    }
    
    render() {
        const center = [48.812498899999994, 2.24694]
        return (
            <Map 
                style={{ height: "100vh" }}
                center={center} 
                zoom="19"
                ref={m => {
                    this.leafletMap = m;
                  }}
                  >
                <TileLayer
                    attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
                    url={'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'} />
                <div style=
                    {
                        {
                            position: "absolute",
                            top: "86px",
                            left: "60px",
                            zIndex: 99999,
                        }
                    }
                />
            </Map>
        );
    }

}

export default Maps