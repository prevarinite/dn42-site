import React, { Component } from "react";
import "./ServiceLink.scss"

export default class ServiceLink extends Component {
    render() {
        return (
            <div className="service">
                <a className="service-link" href={this.props.url}>
                    <h1>{this.props.name}</h1>
                </a>
            </div>
        )
    }
}
