import React, { Component } from "react"
import './index.scss';
import './general.scss';
import Services from "../components/Services";
import {Helmet} from "react-helmet";

export default class index extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Prevarinite on DN42</title>
                    <meta name="description" content="Prevarinite's DN42 network, providing a backbone for DN42 users." />
                    <link rel="canonical" href="https://dn42.prevarinite.net" />
                </Helmet>
                <div className="header">
                    <h1>Prevarinite on DN42</h1>
                    <p>Prevarinite has a network on DN42 that is not very large, with some nodes in different
                        areas around the world.</p>
                    <p>This exists mostly for experimenting with BGP and networking, but the aim is to become
                        peered with as many nodes as possible.</p>
                    <h2>Services we provide</h2>
                </div>
                <Services />
            </div>
        )
    }
}
