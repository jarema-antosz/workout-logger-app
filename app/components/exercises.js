import  React from 'react';

export default class Exercises extends React.Component {

  render() {
    return (
      <div>{this.props.exercises.map(exercise => <div>{exercise.name} - {exercise.reps}</div>)}</div>
    );
  }

}
