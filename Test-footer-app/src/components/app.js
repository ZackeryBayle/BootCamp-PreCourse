import React, { Component } from 'react';
import { footer } from 'npmfooter';
import { Entree } from './diner-menu';

export default class App extends Component {
  render() {
    return (
      <div className='app'>


        <h1>Bottega Bistro</h1>
        <h2>React Dinning application</h2>

        { Entree }

      </div>
    );
  }
};