import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import axios from 'axios';


import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import PortfolioDetail from './portfolio/portfolio-detail';
import Auth from './pages/auth';
import NoMatch from "./pages/no-match";
// import { response } from 'express';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    };
    this.handleSuccessfullLogin = this.handleSuccessfullLogin.bind(this);
    this.handleUnsuccessfullLogin = this.handleUnsuccessfullLogin.bind(this);
    this.handleSuccessLogout = this.handleSuccessLogout.bind(this);
  }
  
  handleSuccessfullLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }
  handleUnsuccessfullLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }  
  
  handleSuccessLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  checkLoginStatus() {
    return axios.get("https://api.devcamp.space/logged_in", {
      withCredentials: true
    }).then(response => {
      const loggedIn = response.data.logged_in;
      const loggedInStatus = this.state.loggedInStatus;

      //if loggedIn and status LOGGED_IN => return data
      //if loggedIn status NOT_LOGGED_IN => update state
      //if not loggedIn and status LOGGED_IN => update state

      if (loggedIn && loggedInStatus === "LOGGED_IN") {
        return loggedIn;
      }else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
        this.setState({
          loggedInStatus: "LOGGED_IN"
        });
      }else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN"
        });
      }
    })
    .catch(error => {
      console.log("ERROR", error);
    });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }


  authorizedPages() {
    return [
    ]
  }


  render() {
    return (
      <div className='container'>

        <Router>
          <div>
            <NavigationContainer 
              loggedInStatus ={this.state.loggedInStatus}
              handleSuccessLogout = {this.handleSuccessLogout}
            />
            <h2>{this.state.loggedInStatus}</h2>
            <Switch>
              <Route exact path="/" component={Home} />

              <Route 
                path="/auth"
                render={props => (
                    <Auth
                      {...props}
                      handleSuccessfullLogin = {this.handleSuccessfullLogin}
                      handleUnsuccessfullLogin = {this.handleUnsuccessfullLogin}
                    />
                  )
                }
              />



              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              {this.state.loggedInStatus === "LOGGED_IN" ? this.authorizedPages(): null}
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
