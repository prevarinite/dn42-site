import React, { Component } from "react";
import PrevariniteLogo from '../resources/logo.png';
import Links from '../resources/links.json';
import './Navbar.scss';
import NavbarLink from "./NavbarLink";

export default class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar">
                <span>
                    <a href="/">
                        <img
                            src={PrevariniteLogo}
                            alt="Prevarinite"
                            width="200px"
                            height="40px"
                        />
                    </a>
                </span>
                <div className="navbar-right">
                    {Links.map(link => (<NavbarLink {...link} />))}
                </div>
            </div>
        );
    }
}
