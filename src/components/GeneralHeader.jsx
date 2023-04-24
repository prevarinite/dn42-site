import {Component} from "react";
import {Helmet} from "react-helmet";

export default class GeneralHeader extends Component {
    render() {
        return (
            <Helmet htmlAttributes={{lang: "en"}}>
                <meta name="theme-color" content="#2A3030" />
                <link href="/favicon.ico" rel="icon" />
            </Helmet>
        )
    }
}
