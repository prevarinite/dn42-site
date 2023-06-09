import React, { Component } from "react";
import "./Services.scss";
import ServiceLinks from "../resources/services.json";
import ServiceLink from "./ServiceLink";

export default class Services extends Component {
    render() {
        return (
            <div className="services">
                {ServiceLinks.map(link => <ServiceLink {...link} />)}
            </div>
        )
    }
}
