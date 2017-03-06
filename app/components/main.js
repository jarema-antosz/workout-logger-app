import React from 'react';
import Trainings from './trainings';

const trainings = [
                    {id: '1',
                      date: '2017-01-01',
                      exercises: [ {name: "pushups", reps: "30"}, { name: "pullups", reps: "10"}]
                    },
                    {id: '2',
                      date: '2017-01-02',
                      exercises: [ {name: "pushups", reps: "50"}, { name: "situps", reps: "30"}]
                    }
                    ];

class MainComponent extends React.Component {
  constructor() {
    super();
    this.state = {trainings : trainings};
  }
  render() {
    return (
      <div>Main Component Here
        <div><Trainings trainingList= {this.state.trainings}/></div>
      </div>
    );
  }

}

export default MainComponent;
