import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';




if(typeof window !== 'undefined') {
  ReactDOM.render(
    <div><App></App></div>,
     document.getElementById('container')
  );
}
