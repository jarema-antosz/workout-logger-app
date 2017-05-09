import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';

class TrainingEditDialog extends React.Component {
  constructor(props) {
    super(props);

    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCancel() {
    this.props.handleCancel();
  }

  handleSubmit() {
    this.props.handleSubmit();
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleCancel}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleSubmit}
      />,
    ];

    return (<Dialog title="Add/Edit Trainging" actions={actions} open={this.props.open}>
            <DatePicker hintText="Training on..." />
    </Dialog>);
  }
}

TrainingEditDialog.propTypes = {
    handleCancel : React.PropTypes.func.isRequired,
    handleSubmit : React.PropTypes.func.isRequired,
    open: React.PropTypes.bool.isRequired
}

export default TrainingEditDialog;
