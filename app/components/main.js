import React from 'react';
import Trainings from './trainings';

var trainings = [
                    // {id: '1',
                    //   date: '2017-01-01',
                    //   exercises: [ {name: "pushups", reps: "30"}, { name: "pullups", reps: "10"}]
                    // },
                    // {id: '2',
                    //   date: '2017-01-02',
                    //   exercises: [ {name: "pushups", reps: "50"}, { name: "situps", reps: "30"}]
                    // }
                    ];

class MainComponent extends React.Component {
  constructor() {
    super();
    this.state = {trainings : trainings};
    this.deleteTraining = this.deleteTraining.bind(this);
  }
  render() {
    if(this.state.trainings.length != 0)
    return (
      <div>Main Component Here
          <div><Trainings trainingList= {this.state.trainings} onDelete={this.deleteTraining}/></div>
      </div>
    );
    else
    return (
      <div>Main Component Here
          <div>No data</div>
      </div>
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
