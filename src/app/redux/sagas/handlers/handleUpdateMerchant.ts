import { call } from "@redux-saga/core/effects";
import { requestUpdateMerchant } from "../requests/requestUpdateMerchant";
import { handleGetMerchants } from "./handleGetMerchants";

interface Action {
  type: string;
  [x: string]: any;
}

export function* handleUpdateMerchant(action: Action) {
  try {
    const { id, data } = action;
    yield call(requestUpdateMerchant, id, data);
  } catch (err) {
    console.log(err);
  }
  handleGetMerchants();
}
