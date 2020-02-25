import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import Header from './components/helpers/headerNav';

ReactDOM.render(
  <App />
  , document.querySelector('.app-wrapper')
  );

ReactDOM.render( 
  <Header />
  , document.querySelector('.app-header'));
  