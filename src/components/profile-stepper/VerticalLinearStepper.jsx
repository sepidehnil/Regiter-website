import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ProfileDetails from "../profile-submission/ProfileDetails";
import ProfilePreview from "../profile-submission/ProfilePreview";
import SubmitedProfiles from "../profile-submission/SubmitedProfiles";
import { useDispatch, useSelector } from "react-redux";
import { submitForm, setErrors } from "../../redux/actions";
import CustomStepIcon from "../../assets/styles/CustomStepIcon";
import CustomStepConnector from "../../assets/styles/CustomStepConnector";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "800px",
  },
  button: {
    width: "100%",
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    backgroundColor: "#e0e0e0",
    color: "white",
    boxShadow: "none",
  },
  button1: {
    width: "100%",
    backgroundColor: "#141199",
    color: "white",
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: "#020063",
    },
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  stepper: {
    textAlign: "right",
    minHeight: "0px",
    borderRadius: "25px",
  },
  stepLabel: {
    fontWeight: "bold",
    fontSize: "20px",
    marginRight: "20px",
  },
  stepLabelActive: {
    fontWeight: "bold !important",
    color: "black",
  },
  stepLabelCompleted: {
    color: "rgba(0, 0, 0, 0.54) !important",
    fontWeight: "bold !important",
  },
  btnWrapper: {
    display: "flex",
  },
}));

function getSteps() {
  return ["ورود مشخصات", "پیش نمایش", "اطلاعات ثبت شده"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ProfileDetails />;
    case 1:
      return <ProfilePreview />;
    case 2:
      return <SubmitedProfiles />;
    default:
      return "Unknown step";
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const dispatch = useDispatch();
  const values = useSelector((state) => state.form.values);

  const handleValidation = () => {
    const newErrors = {
      firstName: !/^[\u0600-\u06FF\s]+$/.test(values.firstName),
      lastName: !/^[\u0600-\u06FF\s]+$/.test(values.lastName),
      nationalId: values.nationalId.length !== 10,
      phoneNumber: !/^0\d{10}$/.test(values.phoneNumber),
      day: !/^(0[1-9]|[12][0-9]|3[01])$/.test(values.day),
      month: !/^(0[1-9]|1[012])$/.test(values.month),
      year: !(values.year >= 1300 && values.year <= 1403),
    };
    dispatch(setErrors(newErrors));
    return !Object.values(newErrors).some((error) => error);
  };

  const handleNext = () => {
    if (activeStep === 0) {
      if (handleValidation()) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    } else if (activeStep === 1) {
      dispatch(submitForm());
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      console.log("Form submitted");
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        className={classes.stepper}
        connector={<CustomStepConnector />}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              StepIconComponent={CustomStepIcon}
              classes={{
                label: classes.stepLabel,
                active: classes.stepLabelActive,
                completed: classes.stepLabelCompleted,
              }}
            >
              {label}
            </StepLabel>
            <StepContent
              style={{
                borderRight: "1px solid #bdbdbd ",
                borderLeft: "none",
                marginRight: "26px",
                padding: "0px",
              }}
            >
              <Typography StepIconComponent={CustomStepIcon}>
                {getStepContent(index)}
              </Typography>
              <div className={classes.actionsContainer}>
                <div className={classes.btnWrapper}>
                  {activeStep === 1 && (
                    <Button
                      variant="contained"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      قبل
                    </Button>
                  )}
                  {(activeStep === 0 || activeStep === 1) && (
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      className={classes.button1}
                      type="submit"
                    >
                      {activeStep === 1 ? "اتمام ثبت نام" : "بعد"}
                    </Button>
                  )}
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {/* {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )} */}
    </div>
  );
}
