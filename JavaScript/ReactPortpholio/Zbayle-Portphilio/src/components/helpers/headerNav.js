
import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className='nav-wrapper'>

        <div className='nav-col-1 col-left'>
          <button >Show Body</button>
        </div>
        <div className='nav-col-2 col-center'>
          <button >Show Body</button>
        </div>
        <div className='nav-col-3 col-right'>
          <button >Show Body</button>
        </div>

      </div>
    );
  }
}