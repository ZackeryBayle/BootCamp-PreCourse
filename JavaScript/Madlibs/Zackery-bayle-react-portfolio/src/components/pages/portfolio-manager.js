import React, { Component } from 'react';
import axios from 'axios';
// import { response } from 'express';


import PortfolioSidebarList from '../portfolio/portfolio-sidebar-list';
import PortfolioForm from '../portfolio/portfolio-form';


export default class PortfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            portfolioItems: []
        }

        this.handleForumSubmissionError = this.handleForumSubmissionError.bind(this);
        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleDeleteClick(portfolioItem) {
        // console.log("handleDeleteClick", portfolioItem);
        axios
        .delete(`https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`, 
        {withCredentials: true}
        ).then(response => {
            console.log('Responce from delete ', response);
            this.setState({
                portfolioItems: this.state.portfolioItems.filter(item => {
                    return item.id !== portfolioItem.id;
                }) 
            })
            return response.data;
        }).catch(error => {
            console.log("handleDeleteClick error", error);
        });
    }

    handleSuccessfulFormSubmission(portfolioItem) {
        // console.log("handleSuccessfulFormSubmission: ", portfolioItem);
        this.setState({
            portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
        });
    }

    handleForumSubmissionError(error){
        console.log('handleForumSubmissionError', error)
    }


    getPortfolioItems() {
        axios.get("https://zackerybayle.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc", {
            withCredentials: true
        }).then(response => {
            this.setState({
                portfolioItems: [...response.data.portfolio_items]
            });
        }).catch(error => {
            console.log("Error in getPortfolioItems: ",error);
        })
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        return (
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                    <PortfolioForm 
                        handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
                        handleForumSubmissionError={this.handleForumSubmissionError}
                    />
                </div>
                <div className="right-column">
                    <PortfolioSidebarList
                        data={this.state.portfolioItems}
                        handleDeleteClick={this.handleDeleteClick}
                    />
                    
                </div>
                
            </div>
        );
    }
}