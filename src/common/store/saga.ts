import { all } from "redux-saga/effects";
import { helloSaga, CounterSaga } from "./counter/saga";
<<<<<<< HEAD
import { watchFetchProducts } from "./products/saga";

export default function* rootSaga() {
  yield all([helloSaga(), CounterSaga(), watchFetchProducts()]);
=======

export default function* rootSaga() {
  yield all([helloSaga(), CounterSaga()]);
>>>>>>> fcb05209eee5f27ada61a22751518c4955557430
}
