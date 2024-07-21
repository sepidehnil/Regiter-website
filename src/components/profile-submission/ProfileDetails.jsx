import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { setValues, setErrors } from "../../redux/actions";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    "& > *": {
      display: "flex",
      margin: theme.spacing(2),
      justifyContent: "center",
    },
  },
  cont1: {
    display: "flex",
    gap: "20px",
  },
  cont2: {
    display: "flex",
    gap: "20px",
  },
  cont3: {
    display: "flex",
    gap: "20px",
  },
  input: {
    width: "100%",
  },
}));

const ProfileDetails = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { values, errors } = useSelector((state) => state.form);

  const handleValidation = (id, value) => {
    let isValid = true;
    switch (id) {
      case "firstName":
      case "lastName":
        isValid = /^[\u0600-\u06FF\s]*$/.test(value);
        break;
      case "nationalId":
        isValid = /^\d{0,10}$/.test(value);
        break;
      case "phoneNumber":
        isValid = /^0\d{0,10}$/.test(value);
        break;
      case "day":
        isValid = /^(0\d{0,1}|[12][0-9]{0,1}|3[01]{0,1})?$/.test(value);
        break;
      case "month":
        isValid = /^(0\d{0,1}|1[012]{0,1})?$/.test(value);
        break;
      case "year":
        isValid = /^(13[0-9]{0,2}|14?[0-3]{0,2})?$/.test(value);
        break;
      default:
        break;
    }
    return isValid;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    const isValid = handleValidation(id, value);
    if (isValid) {
      dispatch(setValues({ [id]: value }));
    }
    dispatch(setErrors({ [id]: !isValid }));
  };

  return (
    <form className={classes.wrapper} noValidate autoComplete="off">
      <div className={classes.cont1}>
        <TextField
          id="firstName"
          label="نام"
          variant="outlined"
          value={values.firstName || ""}
          onChange={handleChange}
          error={!!errors.firstName}
          helperText={errors.firstName && "نام باید به فارسی باشد"}
          className={classes.input}
        />
        <TextField
          id="lastName"
          label="نام خانوادگی"
          variant="outlined"
          value={values.lastName || ""}
          onChange={handleChange}
          error={!!errors.lastName}
          helperText={errors.lastName && "نام خانوادگی باید به فارسی باشد"}
          className={classes.input}
        />
      </div>
      <div className={classes.cont2}>
        <TextField
          id="nationalId"
          label="کد ملی"
          variant="outlined"
          value={values.nationalId || ""}
          onChange={handleChange}
          error={!!errors.nationalId}
          helperText={errors.nationalId && "کد ملی باید ۱۰ رقم باشد"}
          className={classes.input}
        />
        <TextField
          id="phoneNumber"
          label="شماره موبایل"
          variant="outlined"
          value={values.phoneNumber || ""}
          onChange={handleChange}
          error={!!errors.phoneNumber}
          helperText={
            errors.phoneNumber &&
            "شماره موبایل باید با ۰ شروع شود و ۱۱ رقم باشد"
          }
          className={classes.input}
        />
      </div>
      <div className={classes.cont3}>
        <TextField
          id="day"
          label="روز"
          variant="outlined"
          value={values.day || ""}
          onChange={handleChange}
          error={!!errors.day}
          helperText={errors.day && "روز باید بین 01 تا 31 باشد"}
          className={classes.input}
        />
        <TextField
          id="month"
          label="ماه"
          variant="outlined"
          value={values.month || ""}
          onChange={handleChange}
          error={!!errors.month}
          helperText={errors.month && "ماه باید بین 01 تا 12 باشد"}
          className={classes.input}
        />
        <TextField
          id="year"
          label="سال"
          variant="outlined"
          value={values.year || ""}
          onChange={handleChange}
          error={!!errors.year}
          helperText={errors.year && "سال باید بین 1300 تا 1403 باشد"}
          className={classes.input}
        />
      </div>
    </form>
  );
};

export default ProfileDetails;
