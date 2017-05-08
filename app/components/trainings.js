import React from 'react';
import Exercises from './exercises';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';

const style = {
//  height: 100,
//  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export default class Trainings extends React.Component {

  render() {

    return (
      <List>{this.props.trainingList.map( training =>
          <ListItem key={training.id}>
          Date: {training.date}<br /><Exercises exercises={training.exercises}/>
          <RaisedButton label="Delete" onClick={this.props.onDelete.bind(null, training.id)} />
          </ListItem>
      )}
      </List>
  )
}

}

Trainings.propTypes = {
  trainingList: React.PropTypes.array,
  onDelete: React.PropTypes.func.isRequired
};
