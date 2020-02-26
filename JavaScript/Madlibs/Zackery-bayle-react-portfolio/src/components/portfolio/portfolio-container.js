import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        console.log("Portfolio Container: Render");
    }

    render() {
        return (
            <div>
                <h2>Portfolio Container</h2>

                <PortfolioItem />
            </div>
        );
    }
}

