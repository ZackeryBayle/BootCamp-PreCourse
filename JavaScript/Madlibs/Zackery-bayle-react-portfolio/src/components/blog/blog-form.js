import React, { Component } from 'react';

export default class BlogForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            blog_status: ""
        }


        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    render() {
        return (
            <form>
                <input onChange={this.handleChange} type="text" />
                <input type="text" />

                <button>Save</button>
            </form>
        );
    }
}