import React, { Component } from "react";
import './services.scss';
import './general.scss';
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Services from "../components/Services";

export default class services extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Services - Prevarinite on DN42</title>
                </Helmet>
                <Navbar />
                <h1 className="services-title">Prevarinite DN42 Services</h1>
                <Services />
            </div>
        )
    }
}
