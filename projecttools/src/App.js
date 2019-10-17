import React, { Component } from "react";
import { Display } from "./Display";

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            city: "Burlingame"
        }
    }

    changeCity = () => {
        this.setState({ city: this.state.city === "Burlingame" ? "New York" : "Burlingame"})
    }

    render() {
        return (
            <Display value={ this.state.city } callback={ this.changeCity} />
        );
    }
}