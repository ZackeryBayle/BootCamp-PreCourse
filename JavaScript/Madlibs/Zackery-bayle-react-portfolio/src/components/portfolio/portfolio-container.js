import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            pageTitle: "Welcome to my Portfolio",
            data: [
                {title: "Quip"},
                {type: "jr dev"},
                {title: "EventBright"},
                {type: "sr dev"},
                {title: "Ministry Safe"},
                {type: "gen dev"}
            ]
        };
    }
    portfolioItems() {

        return this.state.data.map(item => {
        return <PortfolioItem title={item.title} type={item.type} />;
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                { this.portfolioItems() }
            </div>
        );
    }
}

