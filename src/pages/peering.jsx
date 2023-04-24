import React, { Component } from "react";
import "./peering.scss";
import Nodes from "../resources/nodes.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faServer, faEarthEurope, faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

export default class peering extends Component {
    render() {
        return (
            <div>
                <div className="peering-header">
                    <h1>Peering</h1>
                    <h3>AS4242422475</h3>
                </div>
                <div className="peering-body">
                    <div>
                        <h1><FontAwesomeIcon icon={faCircleInfo} /> Information</h1>
                        <p>To become a peer with one of our nodes, reach out to me, BomBardyGamer, through any of the
                            following ways:</p>
                        <ul>
                            <li>Discord: BomBardyGamer#2274</li>
                            <li>Matrix: <a href="https://matrix.to/#/@bombardygamer:matrix.org">@bombardygamer:matrix.org</a></li>
                            <li>IRC: bombardygamer on #dn42 @ <a href="https://hackint.org">hackint</a></li>
                            <li>Email: <a href="mailto:callum.seabrook@prevarinite.com">callum.seabrook@prevarinite.com</a> (other methods preferred)</li>
                        </ul>
                        <p>
                            The preferred setup for peering is using WireGuard over IPv6 link-local addresses with
                            single, multiprotocol BGP sessions and extended next hop enabled. However, different setups can be
                            supported on request, such as separate v4 and v6 sessions for non-multiprotocol BGP, or perhaps a
                            different VPN protocol. Reach out and ask for it if you want to peer and have a different setup.
                        </p>
                        <p>
                            If you have multiple nodes in multiple regions across continents, it is recommended to setup
                            multiple peerings for added redundancy across your network, and allow better routing (closer to
                            the origin) across regions.
                        </p>
                    </div>
                    <br />
                    <br />
                    <div>
                        <h1><FontAwesomeIcon icon={faServer} /> Nodes</h1>

                        <h2><FontAwesomeIcon icon={faEarthEurope} /> Europe</h2>
                        {this.renderContinent(Nodes.Europe)}

                        <h2><FontAwesomeIcon icon={faEarthAmericas} /> Americas</h2>
                        {this.renderContinent(Nodes.Americas)}
                    </div>
                </div>
            </div>
        )
    }

    renderContinent(nodes) {
        return nodes.map(node => (<div>
            <h3>{node.location}</h3>
            {this.renderNode(node)}
        </div>))
    }

    renderNode(node) {
        return <ul>
            <li><b>Name</b>: {node.name}</li>
            <li><b>Hostname</b>: {node.hostname}</li>
            <li><b>Provider</b>: {node.provider}</li>
            <li><b>Link local</b>: {node.linkLocal}</li>
            <li><b>WireGuard public key</b>: {node.wireGuardPublicKey}</li>
        </ul>
    }
}
