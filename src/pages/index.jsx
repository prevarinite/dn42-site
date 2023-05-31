import React, { Component } from "react"
import './index.scss';
import './general.scss';
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";

export default class index extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Prevarinite on DN42</title>
                    <meta name="description" content="Prevarinite's DN42 network, providing a backbone for DN42 users." />
                    <link rel="canonical" href="https://prevarinite.net" />
                </Helmet>
                <Navbar />
                <div className="header">
                    <h1>Prevarinite on DN42</h1>
                    <p>Prevarinite has a network on DN42 that is not very large, with some nodes in different
                        areas around the world.</p>
                    <p>This exists both for experimentation and for acting as an intermediary.</p>
                    <br />
                    <p>We aim to be a good intermediary point for others wanting to connect to DN42, and to
                        provide a good quality backbone across DN42, covering a lot of the world.</p>
                    <p>If you would like to peer with us, we are accepting all types of peers, whether from other
                        large networks, or from new starters. We don't discriminate.</p>
                    <br />
                    <p>If you would like to peer with us, please head over to the peering page, pick a node, and
                        contact us via the methods provided on that page.</p>
                </div>
            </div>
        )
    }
}
