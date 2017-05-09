import React from 'react';
import MainComponent from './components/main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/header';
import TrainingEditDialog from './components/trainingEditDialog';

import promise from 'es6-promise';
import 'isomorphic-fetch';

promise.polyfill();


export default class App extends React.Component {

  constructor() {
    super();

    this.state = {openEditDialog: false, editedTraining: { date: null, exercises: []}};
    this.addTrainingHandler = this.addTrainingHandler.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addTrainingHandler() {
    console.log("add training");
    this.setState({openEditDialog : true});
  }

  handleCancel() {
      this.setState({openEditDialog : false});
  }

  handleSubmit() {
    console.log("TODO: handle submit");
    this.setState({openEditDialog : false});
  }

  render() {
    return (<MuiThemeProvider>
      <div>
        <Header addTraining={this.addTrainingHandler}/>
        <TrainingEditDialog
        open={this.state.openEditDialog}
        editedTraining={this.state.editedTraining}
        handleCancel={this.handleCancel} handleSubmit={this.handleSubmit}
        />
        <MainComponent />
      </div>
     </MuiThemeProvider>)
  }
}
