import React from "react";
import Paper from "material-ui/Paper";

const style = {
  margin: 30,
  padding: 30
};

const NoDataInfo = () => (
  <Paper style={style} zDepth={5}><center>No data available</center></Paper>
);

export default NoDataInfo;
