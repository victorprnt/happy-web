import React from 'react';
import ReactDOM from 'react-dom'; //Integration REact and DOM (HTML element tree)

import App from './App'; //React componnet

ReactDOM.render( // Inside this render, every every content will be added to the ElementById below
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
