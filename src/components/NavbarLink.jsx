import React, { Component } from "react";
import './NavbarLink.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle, faMap, faMagnifyingGlass, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faShuffle, faMap, faMagnifyingGlass, faTriangleExclamation);

export default class NavbarLink extends Component {
    render() {
        return (
            <a href={this.props.url} className="navbar-link">
                {this.props.icon !== undefined && (<FontAwesomeIcon icon={this.props.icon} />)}
                &nbsp;&nbsp;{this.props.name}
            </a>
        )
    }
}
