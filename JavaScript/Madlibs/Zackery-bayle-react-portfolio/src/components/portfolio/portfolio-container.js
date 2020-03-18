import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            pageTitle: "Welcome to my Portfolio",
            isLoading:false,
            data: [
                {title: "Quip",type: "jr dev", category: "eCommerce", slug: "quip"},
                {title: "EventBright", type: "sr dev", category: "Scheduling",slug: "eventbrite"},
                {title: "Ministry Safe", type: "gen dev", category: "Enterprise", slug: "ministry-safe"}
            ]
        };
        this.handelFilter = this.handelFilter.bind(this);
    }

    handelFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    portfolioItems() {

        return this.state.data.map(item => {
        return <PortfolioItem title={item.title} type={item.type} slug={item.slug}  />;
        });
    }


    // handelPageTitleUpdate() {
    //     this.setState({
    //         pageTitle: "Zackery Bayles Porfolio"
    //     });
    // }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
                <button onClick={() => this.handelFilter('eCommerce')}>eCommerce</button>
                <button onClick={() => this.handelFilter('Scheduling')}>Scheduling</button>
                <button onClick={() => this.handelFilter('Enterprise')}>Enterprise</button>

                { this.portfolioItems() }

            </div>
        );
    }
}

