import React from "react";
import Trainings from "./trainings";
import NoDataInfo from "./noData";

class MainComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { trainings: props.trainings };
    this.editTraining = this.editTraining.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ trainings: nextProps.trainings });
  }

  render() {
    if (this.state.trainings && this.state.trainings.length != 0)
      return (
        <div>
          <div>
            <Trainings
              trainingList={this.state.trainings}
              onDelete={this.props.deleteHandler}
              onEdit={this.editTraining}
            />
          </div>
        </div>
      );
    else return <NoDataInfo />;
  }

  editTraining(training) {
    console.log("edit training " + training);
  }
}

MainComponent.propTypes = {
  trainings: React.PropTypes.array.isRequired,
  deleteHandler: React.PropTypes.func.isRequired
};

export default MainComponent;
