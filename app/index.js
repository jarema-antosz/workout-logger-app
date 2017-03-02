import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './components/main';


if(typeof window !== 'undefined') {
  ReactDOM.render(
     <MainComponent />,
     document.getElementById('container')
  );
}
