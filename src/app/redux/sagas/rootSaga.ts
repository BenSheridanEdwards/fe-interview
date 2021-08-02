import { takeLatest } from "redux-saga/effects";
import { handleGetMerchants } from "./handlers/handleGetMerchants";
import { handleUpdateMerchant } from "./handlers/handleUpdateMerchant";
import { handleGetCategories } from "./handlers/handleGetCategories";

export function* watcherSaga() {
  yield takeLatest("GET_CATEGORIES", handleGetCategories);
  yield takeLatest("GET_MERCHANTS", handleGetMerchants);
  yield takeLatest("UPDATE_MERCHANT", handleUpdateMerchant);
}
