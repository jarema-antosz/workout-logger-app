import React from 'react';
import MainComponent from './components/main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/header';
import TrainingEditDialog from './components/trainingEditDialog';

import promise from 'es6-promise';
import 'isomorphic-fetch';

promise.polyfill();
// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


export default class App extends React.Component {

  constructor() {
    super();

    this.state = {openEditDialog: false, editedTraining: { date: null, exercises: []}, trainings: []};
    this.addTrainingHandler = this.addTrainingHandler.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTraining = this.deleteTraining.bind(this);
    this.deleteTrainingApiCall = this.deleteTrainingApiCall.bind(this);
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

  componentDidMount() {
    console.log("MainComponent mounted. Make ajax call");
    this.fetchTrainingsApiCall();
  }

  fetchTrainingsApiCall() {
    console.log("fetchTrainingsFromApi");
    fetch("http://localhost:3000/trainings").then((resp) => resp.json())
    .then((data) => {var trainings = data;this.setState({trainings : trainings})})
    .catch(function(error) {
      console.log(error);
    });
  }

  deleteTrainingApiCall(id) {
    fetch("http://localhost:3000/trainings/" + id, {
      method: 'DELETE',
    }).then(resonse => this.fetchTrainingsApiCall()).catch(function(error) {
      console.log(error);
    });
  }

  deleteTraining(training) {
    console.log("delete " + training);
    this.deleteTrainingApiCall(training.id);
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
        <MainComponent trainings={this.state.trainings} deleteHandler={this.deleteTraining}/>
      </div>
     </MuiThemeProvider>)
  }
}
