import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';


class TrainingEditDialog extends React.Component {



  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setTrainingDate = this.setTrainingDate.bind(this);

  }

  handleCancel() {
    this.props.handleCancel();
  }

  handleSubmit() {
    this.props.handleSubmit();
  }

  setTrainingDate(first, date) {
    console.log("set training date " + date + " on " + this.props.editedTraining);
    this.props.editedTraining.date = date;
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
            <DatePicker hintText="Training on..." onChange={this.setTrainingDate} formatDate={new global.Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format}

      defaultDate={!this.props.editedTraining.date ? new Date() : this.props.editedTraining.date}

      />
    </Dialog>);
  }
}

TrainingEditDialog.propTypes = {
    handleCancel : React.PropTypes.func.isRequired,
    handleSubmit : React.PropTypes.func.isRequired,
    open: React.PropTypes.bool.isRequired,
    editedTraining: React.PropTypes.object.isRequired
}

export default TrainingEditDialog;
