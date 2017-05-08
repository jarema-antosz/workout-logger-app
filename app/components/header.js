import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const Header = (props) => (
  <AppBar title='Workout Logger App' showMenuIconButton={false} iconElementRight={<FlatButton label="Add training" onClick={() => props.addTraining()}/>} />
);

Header.propTypes = {
  addTraining: React.PropTypes.func.isRequired
}

export default Header;
