import { put, takeEvery } from "redux-saga/effects";
import { ACTIONS } from "../sagaActions";
import { decrement, increment } from "./slice";

<<<<<<< HEAD
function* incCounter({ payload }: any) {
  console.log(payload);
=======
function* incCounter() {
>>>>>>> fcb05209eee5f27ada61a22751518c4955557430
  yield put(increment());
}

function* decCounter() {
  yield put(decrement());
}

export function* CounterSaga() {
  yield takeEvery(ACTIONS.INCREMENT, incCounter);
  yield takeEvery(ACTIONS.DECREMENT, decCounter);
}

export function* helloSaga() {
  console.log("Hello Sagas!");
}
