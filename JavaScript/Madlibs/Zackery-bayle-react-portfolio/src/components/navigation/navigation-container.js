import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router";
import { NavLink } from 'react-router-dom';
// import { response } from 'express';

const NavigationComponent = (props) => {

    const dynamicLink = (route, linkText) => {
        return (
            <NavLink to="/auth" activeClassName="nav-link-active"><i class="fas fa-sign-in-alt"></i></NavLink>
        )
    }

    const handleSignOut = () => {
        axios.delete("https://api.devcamp.space/logout", {withCredentials: true}).then(response => {
            if (response.status === 200) {
                props.history.push("/");
                props.handleSuccessLogout();
            }
            return response.data;
        }).catch(error => {
            console.log("Error on Sign Out: ", error);
        })
    }



    return (
        <div className="nav-wrapper">

            <div className="left-side">

                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/about-me" activeClassName="nav-link-active">About</NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/contact" activeClassName="nav-link-active">Contact</NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/blog" activeClassName="nav-link-active">Blog</NavLink>
                </div>

            </div>

            <div className="right-side">
                ZACKERY BAYLE
                
                {props.loggedInStatus === "LOGGED_IN" ? <a onClick={handleSignOut}><i class="fas fa-sign-out-alt"></i></a>: null}
                {props.loggedInStatus !== "LOGGED_IN" ? dynamicLink("/auth", "Sign In") : null} 




            </div>
        </div>
    )
}
export default withRouter(NavigationComponent);