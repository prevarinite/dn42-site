import React, { Component } from "react";
import "./ServiceLink.scss"

export default class ServiceLink extends Component {
    render() {
        return (
            <div className="service">
                <a href={this.props.url}>
                    <h1>{this.props.name}</h1>
                    <p>{this.props.description}</p>
                </a>
            </div>
        )
    }
}
