import React from "react";
import { withStyles } from "@material-ui/core/styles";
import StepConnector from "@material-ui/core/StepConnector";

const CustomStepConnector = withStyles({
  line: {
    borderRight: "1px solid #bdbdbd",
    borderLeft: "none",
    marginRight: "26px",
  },
})(StepConnector);

export default CustomStepConnector;
