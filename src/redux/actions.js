export const SET_VALUES = "SET_VALUES";
export const SET_ERRORS = "SET_ERRORS";
export const SUBMIT_FORM = "SUBMIT_FORM";
export const POST_FORM_SUCCESS = "POST_FORM_SUCCESS";
export const POST_FORM_FAILURE = "POST_FORM_FAILURE";

export const setValues = (values) => ({
  type: SET_VALUES,
  payload: values,
});

export const setErrors = (errors) => ({
  type: SET_ERRORS,
  payload: errors,
});

export const submitForm = () => ({
  type: SUBMIT_FORM,
});

export const postFormSuccess = () => ({
  type: POST_FORM_SUCCESS,
});

export const postFormFailure = (error) => ({
  type: POST_FORM_FAILURE,
  error,
});
