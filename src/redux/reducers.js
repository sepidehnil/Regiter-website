// reducers.js
import { combineReducers } from "redux";
import formReducer from "../redux/formReducer";

const rootReducer = combineReducers({
  form: formReducer,
});

export default rootReducer;
