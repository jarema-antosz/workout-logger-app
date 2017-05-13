import React from "react";
import { List, ListItem } from "material-ui/List";

export default class Exercises extends React.Component {
  render() {
    return (
      <List>
        {this.props.exercises.map(exercise => (
          <ListItem key={exercise.name}>
            {exercise.name} - {exercise.reps}
          </ListItem>
        ))}
      </List>
    );
  }
}

Exercises.propTypes = {
  exercises: React.PropTypes.array
};
