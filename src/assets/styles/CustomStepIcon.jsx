import React from "react";
import Check from "@material-ui/icons/Check";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#140099",
  },
  completed: {
    color: "white",
    zIndex: 1,
    fontSize: "18px",
  },
  circle: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "currentColor",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  checkWrappper: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#017200",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: "white",
  },
});

export default function CustomStepIcon(props) {
  const classes = useStepIconStyles();
  const { active, completed, icon } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {completed ? (
        <div className={classes.checkWrappper}>
          <Check className={classes.completed} />
        </div>
      ) : (
        <div className={classes.circle}>
          <div className={classes.number}>{icon}</div>
        </div>
      )}
    </div>
  );
}
