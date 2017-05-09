import React from 'react';
import Trainings from './trainings';
import NoDataInfo from './noData';



var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var trainings = [];

class MainComponent extends React.Component {
  constructor() {
    super();
    this.state = {trainings : trainings};
    this.deleteTraining = this.deleteTraining.bind(this);
    this.editTraining = this.editTraining.bind(this);
  }
  render() {
    if(this.state.trainings.length != 0)
    return (
      <div>
          <div><Trainings trainingList= {this.state.trainings} onDelete={this.deleteTraining} onEdit={this.editTraining}/></div>
      </div>
    );
    else
    return (
      <NoDataInfo />
    );
  }

  componentDidMount() {
    console.log("MainComponent mounted. Make ajax call");
    this.fetchTrainingsFromApi();

  }

  fetchTrainingsFromApi() {
    console.log("fetchTrainingsFromApi");
    fetch("http://localhost:3000/trainings").then((resp) => resp.json())
    .then((data) => {trainings= data; this.setState({trainings : trainings})})
    .catch(function(error) {
      console.log(error);
    });
  }

  deleteTrainingApiCall(id) {
    fetch("http://localhost:3000/trainings/" + id, {
      method: 'DELETE',
    }).then(resonse => this.fetchTrainingsFromApi()).catch(function(error) {
      console.log(error);
    });
  }

  deleteTraining(training) {
    console.log("delete " + training);
    this.deleteTrainingApiCall(training.id);
  }

  editTraining(training) {
    console.log("edit training " + training);
  }

}

export default MainComponent;
