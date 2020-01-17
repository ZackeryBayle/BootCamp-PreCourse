import React, { Component } from 'react';
import { Entree } from './diner-menu';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <h2>React Skeleton</h2>

        { Entree }
      </div>
    );
  }
}