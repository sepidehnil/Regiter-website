import {
  SET_VALUES,
  SET_ERRORS,
  POST_FORM_SUCCESS,
  POST_FORM_FAILURE,
} from "../redux/actions";

const initialState = {
  values: {
    firstName: "",
    lastName: "",
    nationalId: "",
    phoneNumber: "",
    day: "",
    month: "",
    year: "",
  },
  errors: {
    firstName: false,
    lastName: false,
    nationalId: false,
    phoneNumber: false,
    day: false,
    month: false,
    year: false,
  },
  isSubmitting: false,
  submitSuccess: false,
  submitError: null,
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VALUES:
      return {
        ...state,
        values: {
          ...state.values,
          ...action.payload,
        },
      };
    case SET_ERRORS:
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.payload,
        },
      };
    case POST_FORM_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
        submitSuccess: true,
      };
    case POST_FORM_FAILURE:
      return {
        ...state,
        isSubmitting: false,
        submitError: action.error,
      };
    default:
      return state;
  }
};

export default formReducer;
