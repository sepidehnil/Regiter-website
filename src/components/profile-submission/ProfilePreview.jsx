import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    margin: theme.spacing(3),
    textAlign: "center",
  },
}));

export default function ProfilePreview() {
  const values = useSelector((state) => state.form.values);
  const classes = useStyles();

  return (
    <Paper className={classes.container} elevation={10}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h6">
            نام خانوادگی: {`${values.firstName} ${values.lastName}`}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">کد ملی: {values.nationalId}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">
            شماره موبایل: {values.phoneNumber}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">
            تاریخ تولد: {`${values.day}-${values.month}-${values.year}`}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
