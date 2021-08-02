import { call, put } from "@redux-saga/core/effects";
import {
  MerchantType,
  setMerchants
} from "../../slices/merchant/merchantSlice";
import { requestGetMerchants } from "../requests/requestGetMerchants";

interface ResponseGenerator {
  config: {};
  data: Array<MerchantType>;
  headers: {};
  request: XMLHttpRequest;
  status: number;
  statusText: string;
}

export function* handleGetMerchants() {
  try {
    const response: ResponseGenerator = yield call(requestGetMerchants);
    const { data } = response;
    yield put(setMerchants(data));
  } catch (err) {
    console.log(err);
  }
}
