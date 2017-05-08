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
  }
  render() {
    if(this.state.trainings.length != 0)
    return (
      <div>
          <div><Trainings trainingList= {this.state.trainings} onDelete={this.deleteTraining}/></div>
      </div>
    );
    else
    return (
      <NoDataInfo />
    );
  }

  componentDidMount() {
    console.log("MainComponent mounted. Make ajax call");
    fetch("http://localhost:3000/trainings").then((resp) => resp.json())
    .then((data) => {trainings= data; this.setState({trainings : trainings})})
    .catch(function(error) {
      console.log(error);
    });
  }

  deleteTraining(training) {
    trainings = trainings.filter( element => element.id !== training );
    this.setState({trainings : trainings});
  }

}

export default MainComponent;
