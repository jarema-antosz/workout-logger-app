import React from 'react';
import MainComponent from './components/main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/header';


export default class App extends React.Component {

  constructor() {
    super();
    this.addTrainingHandler.bind(this);
  }

  addTrainingHandler() {
    console.log("add training")
  }

  render() {
    return (<MuiThemeProvider>
      <div>
        <Header addTraining={this.addTrainingHandler}/>
        <MainComponent />
      </div>
     </MuiThemeProvider>)
  }
}
