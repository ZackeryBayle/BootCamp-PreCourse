import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            pageTitle: "Welcome to my Portfolio",
            isLoading:false,
            data: []
        };
        this.handelFilter = this.handelFilter.bind(this);
        this.getPortfolioItems = this.getPortfolioItems.bind(this);
    }

    handelFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    getPortfolioItems() {
        const axios = require('axios');
     
      // Make a request for a user with a given ID
      axios.get('https://zackerybayle.devcamp.space/portfolio/portfolio_items')
        .then(response =>  {
          // handle success
          console.log("Responce Data", response);
          this.setState({
            data: response.data.portfolio_items
            });
        })
        .catch(error => {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
      }

    portfolioItems() {
        console.log("i got here", this.state.data)
        return this.state.data.map(item => {
            console.log("Item Data", item)
        return <PortfolioItem key={item.id} title={item.name} url={item.url} type={item.category} slug={item.id}  />;
        });
    }


    // handelPageTitleUpdate() {
    //     this.setState({
    //         pageTitle: "Zackery Bayles Porfolio"
    //     });
    // }

    componentDidMount() {
        this.getPortfolioItems();
    }

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

