import React, { Component } from 'react';

import axios from "axios";
// import { response } from 'express';

import { FrontAwesomeIcon, FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ReactHtmlParser from "react-html-parser";

import BlogFeaturedImage from "../blog/blog-featured-image";
import BlogForm from '../blog/blog-form';


export default class BlogDetail extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentId: this.props.match.params.slug,
            blogItem: {},
            editMode: false
        }

        this.handleEditClick = this.handleEditClick.bind(this);
    }


    handleEditClick() {
        this.setState({
            editMode: true
        });
    }

    getBlogItem() {
        axios
        .get(
            `https://zackerybayle.devcamp.space/portfolio/portfolio_blogs/${this.state.currentId}`
        ).then(response => {
            // console.log("response", response);
            this.setState({
                blogItem: response.data.portfolio_blog
            });
        }).catch(error => {
            console.log("getBlogItem Error: ", error);
        });
    }

    componentDidMount() {
        this.getBlogItem();
    }

    render() {
        const {
            title,
            content,
            featured_image_url,
            blog_status
        } = this.state.blogItem;


        const contentManager = () => {
            if (this.state.editMode) {
                return <BlogForm />
            } else {
                return(
                    <div className="content-container">
                        <h1>{title}<sub onClick={this.handleEditClick}><FontAwesomeIcon icon="pencil-alt" /></sub></h1>
                        <BlogFeaturedImage img={featured_image_url} />
                        <div className="blog-content">
                            {ReactHtmlParser(content)}
                        </div>
                    </div>
                )
            }
        }



        return (
            <div className="blog-container">
                {contentManager()}
            </div>
        );
    }
}