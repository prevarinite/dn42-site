import React, { Component } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./map.scss";
import Locations from "../resources/locations.json";
import {Helmet} from "react-helmet";

export default class map extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Network Map - Prevarinite on DN42</title>
                </Helmet>
                <div className="map-header">
                    <h1>Map of peering locations</h1>
                </div>
                <MapContainer style={{height: "80vh"}} center={[45, -43]} zoom={4}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {Locations.map(location => <Marker position={[location.lat, location.lon]}>
                        <Popup>
                            Name: {location.name}<br/>
                            Location: {location.location}<br/>
                            Provider: {location.provider}<br/>
                        </Popup>
                    </Marker>)}
                </MapContainer>
            </div>
        )
    }
}
