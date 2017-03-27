import React from 'react';
import Exercises from './exercises';



export default class Trainings extends React.Component {

  render() {

    return (
      <ul>{this.props.trainingList.map( training =>
          <li key={training.id}>Date: {training.date}<br /><Exercises exercises={training.exercises}/>
          <button onClick={this.props.onDelete.bind(null, training.id)} >Delete</button></li>
      )}
      </ul>
  )
}

}

Trainings.propTypes = {
  trainingList: React.PropTypes.array,
  onDelete: React.PropTypes.func.isRequired
};
