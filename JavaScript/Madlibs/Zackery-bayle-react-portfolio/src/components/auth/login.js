import React, { Component } from 'react'; 
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errorText: ""
        };

        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        });
    }


    handleSubmit(event) {
        axios
          .post(
            "https://api.devcamp.space/sessions",
            {
              client: {
                email: this.state.email,
                password: this.state.password
              }
            },
            { withCredentials: true }
          )
          .then(response => {
            console.log("response", response);
            if (response.data.status === "created") {
                // console.log("Logged in!!!")
                this.props.handleSuccessfullAuth();
            }else {
                this.setState({
                    errorText: "Wrong Email or Password"
                });
                this.props.handleUnsuccessfullAuth();
            }
          }).catch(error => {
              console.log(error.description);
              this.setState({
                  errorText: error.description
              });
              this.props.handleUnsuccessfullAuth();
          });
    
        event.preventDefault();
      }



    render() {
        return (
            <div>
                <h1>Login to access your dashboard</h1>

                <div>
                    {this.state.errorText}
                </div>
                
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Your Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />

                    <input 
                        type="password" 
                        name="password"
                        placeholder="Your Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />

                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>        
        );
    }
}