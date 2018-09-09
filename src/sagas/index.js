import { takeLatest } from "redux-saga";
import { all, fork } from "redux-saga/lib/effects";

import { watchHistoricalPricesSaga } from "./HistoricalPricesSaga";
import { watchLivePricesSaga } from "./LivePricesSaga";

export default function* watcherSaga() {
  yield all([fork(watchHistoricalPricesSaga), fork(watchLivePricesSaga)]);
}
