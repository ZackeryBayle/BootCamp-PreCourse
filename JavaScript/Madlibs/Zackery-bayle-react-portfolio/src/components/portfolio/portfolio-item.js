import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class PortfolioItem extends Component {
    //item keys
        // 0: "id"
        // 1: "name"
        // 2: "description"
        // 3: "url"
        // 4: "category"
        // 5: "position"
        // 6: "thumb_image_url"
        // 7: "banner_image_url"
        // 8: "logo_url"
        // 9: "column_names_merged_with_images"

        constructor(props) {
            super(props);
            this.state = {
                PortfolioItemClass: ""
            }
        }

        //Mouse Over Handler
        handleMouseEnter() {
            this.setState({PortfolioItemClass: 'image-blur'});
        }
        handleMouseLeave() {
            this.setState({PortfolioItemClass: ''});
        }

    render() {
        const { id, description, thumb_image_url, logo_url, name, category} = this.props.item;

        return (
            <div className="portfolio-item-wrapper"
                onMouseEnter={() => this.handleMouseEnter()}
                onMouseLeave={() => this.handleMouseLeave()}
            >
                <div 
                    className={"portfolio-img-background " + this.state.PortfolioItemClass}
                    style={{
                        backgroundImage:"url(" + thumb_image_url + ")"
                    }}
                />

                <div className="img-text-wrapper">
                    <div className="logo-wrapper">
                        <img src={logo_url} />
                    </div>
                    <div className="subtitle">
                        {description}
                    </div>
                </div>
            
            </div>
        );
    }
}