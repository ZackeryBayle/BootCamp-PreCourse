import React, { Component } from 'react';
import { Entree } from './diner-menu';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Bottega Bistro</h1>
        <h4>DevCamp Dinning</h4>

        { Entree }
      </div>
    );
  }
}