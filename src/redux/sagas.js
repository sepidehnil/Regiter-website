import { put, takeEvery, select, call } from "redux-saga/effects";
import {
  SUBMIT_FORM,
  setErrors,
  postFormSuccess,
  postFormFailure,
} from "../redux/actions";

function* submitFormSaga() {
  console.log("submitFormSaga called");
  const isValid = true;
  if (isValid) {
    const state = yield select((state) => state.form); //access the current state
    const { firstName, lastName, nationalId, phoneNumber, day, month, year } =
      state.values;
    const birthDate = `${year}-${month}-${day}`;
    const payload = {
      name: `${firstName} ${lastName}`,
      nid: nationalId,
      phone: phoneNumber,
      birthDate,
    };
    //Each yield pauses the saga until the operation (select, call, put) completes.
    try {
      const response = yield call(
        fetch,
        "https://66996e3d2069c438cd7246ee.mockapi.io/api/vi/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        yield put(postFormSuccess()); //put=dispatch
        console.log("Form Submitted Successfully", payload);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      yield put(postFormFailure(error.message));
      console.error("Form submission error:", error);
    }
  }
}

function* rootSaga() {
  yield takeEvery(SUBMIT_FORM, submitFormSaga);
}

export default rootSaga;
