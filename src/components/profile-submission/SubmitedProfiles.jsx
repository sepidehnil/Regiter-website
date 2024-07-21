import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Paper,
  Typography,
  CircularProgress,
  Box,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    margin: theme.spacing(3),
    textAlign: "center",
  },
  countdown: {
    marginTop: theme.spacing(2),
    fontSize: "1.2rem",
  },
  userId: {
    fontWeight: "bold",
    margin: theme.spacing(1),
  },
  error: {
    color: "red",
    fontSize: "1rem",
    marginTop: theme.spacing(5),
  },
}));

export default function SubmitedProfiles() {
  const classes = useStyles();
  const history = useHistory();
  const { submitSuccess, submitError, values } = useSelector(
    (state) => state.form
  );
  const [countdown, setCountdown] = useState(10);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    let timer;
    if (submitSuccess) {
      localStorage.setItem("userProfile", JSON.stringify(values));
      console.log(JSON.stringify(values));

      timer = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown <= 1) {
            clearInterval(timer);
            history.push("/dashboard");
          }
          return prevCountdown - 1;
        });
      }, 1000);

      const fetchUserId = async () => {
        try {
          const response = await fetch(
            "https://66996e3d2069c438cd7246ee.mockapi.io/api/vi/users"
          );
          if (response.ok) {
            const data = await response.json();
            const latestUser = data[data.length - 1];
            setUserId(latestUser.id);
          } else {
            console.error("Failed to fetch user data");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUserId();
    }
    return () => clearInterval(timer);
  }, [submitSuccess, values, history]);

  return (
    <Paper className={classes.container} elevation={10}>
      {submitSuccess && (
        <div>
          <Typography>
            کاربر گرامی ثبت نام شما با کد شناسه کاربری
            {userId ? (
              <span className={classes.userId}> {userId}</span>
            ) : (
              <CircularProgress size={20} />
            )}
            با موفقیت انجام شد.
          </Typography>
          <Typography className={classes.countdown}>
            انتقال به داشبورد در {countdown} ثانیه
          </Typography>
        </div>
      )}
      {submitError ? (
        <Typography className={classes.error}>
          ارسال فرم با خطا مواجه شد: {submitError}
        </Typography>
      ) : (
        <Typography></Typography>
      )}
    </Paper>
  );
}
