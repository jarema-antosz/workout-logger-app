import  React from 'react';

export default class Exercises extends React.Component {

  render() {
    return (
      <div>{this.props.exercises.map(exercise => <div key={exercise.name}>{exercise.name} - {exercise.reps}</div>)}</div>
    );
  }

}

Exercises.propTypes = {
    exercises: React.PropTypes.array
}
