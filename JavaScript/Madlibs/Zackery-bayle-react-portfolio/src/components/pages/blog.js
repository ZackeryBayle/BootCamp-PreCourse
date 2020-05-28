import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { FrontAwesomeIcon, FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
// import { response } from 'express';



import BlogItem from "../blog/blog-item";
import BlogModal from "../modals/blog-modal";





class Blog extends Component {
    constructor() {
        super();

        this.state = {
            blogItems: [],
            totalCount: 0,
            currentPage: 0,
            isLoading: true,
            eol: false,
            blogModalIsOpen: false
        }

        this.getBlogItems = this.getBlogItems.bind(this);
        this.onScroll = this.onScroll.bind(this);
        window.addEventListener("scroll", this.onScroll, false);
        this.handleNewBlogClick = this.handleNewBlogClick.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleSuccessfulNewBlogSubmission = this.handleSuccessfulNewBlogSubmission.bind(this);

    }

    handleSuccessfulNewBlogSubmission(blog) {
        this.setState({
            blogItems: [blog].concat(this.state.blogItems),

            blogModalIsOpen: false // Causing Unmount Memory Leak
            
        });
    }

    handleModalClose() {
        this.setState({
            blogModalIsOpen: false
        });
    }

    handleNewBlogClick() {
        this.setState({
            blogModalIsOpen: true
        });
    }

    
    onScroll() {


        if (this.state.isLoading || this.state.blogItems.length === this.state.totalCount) {
            this.setState({
                eol: true
            })
        }

        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            this.getBlogItems();
        }
    }

    getBlogItems() {
        //Set Inital Page as 1
        this.setState({
            currentPage: this.state.currentPage + 1
        });

        axios
        .get(`https://zackerybayle.devcamp.space/portfolio/portfolio_blogs?page=${this.state.currentPage}`,
        {withCredentials: true}
        ).then(response => {
            
            console.log("Getting more post..", response.data);

            this.setState({
                blogItems: this.state.blogItems.concat(response.data.portfolio_blogs),
                totalCount: response.data.meta.total_records,
                isLoading: false
            });
        }).catch(error => {
            console.log("getBlogItems error", error);
        });
    }

    componentWillMount() {
        this.getBlogItems();
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll, false);
    }



    render() {
        const blogRecords = this.state.blogItems.map(blogItem => {
            return <BlogItem key={blogItem.id} blogItem={blogItem} />
        });

        return (
            <div className="blog-container">
                <div className="content-container">
                    <BlogModal
                        handleSuccessfulNewBlogSubmission={this.handleSuccessfulNewBlogSubmission}
                        modalIsOpen ={this.state.blogModalIsOpen}
                        handleModalClose ={this.handleModalClose}
                    />

                    {blogRecords}

                    { this.props.loggedInStatus === "LOGGED_IN" ? (
                        <div className="new-blog-link">
                            <a onClick={this.handleNewBlogClick}><FontAwesomeIcon icon="plus-circle" /> </a>
                        </div>
                    ) : null}

                </div>

                {this.state.isLoading ? (
                    <div className="content-loader">
                        <FontAwesomeIcon icon="spinner" spin />
                        <h3>Loading more Blogs...</h3>
                    </div>): null
                }

                {this.state.eol ? (
                    <div className="footer-no-blog-left">
                        <h4>No more Blogs to Load</h4>
                    </div>): null
                }

            </div>
        )
    }
}

export default Blog;