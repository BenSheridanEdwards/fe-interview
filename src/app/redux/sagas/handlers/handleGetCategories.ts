import { call, put } from "@redux-saga/core/effects";
import {
  setCategories,
  CategoryType
} from "../../slices/category/categorySlice";
import { requestGetCategories } from "../requests/requestGetCategories";

interface ResponseGenerator {
  config: {};
  data: Array<CategoryType>;
  headers: {};
  request: XMLHttpRequest;
  status: number;
  statusText: string;
}

export function* handleGetCategories() {
  try {
    const response: ResponseGenerator = yield call(requestGetCategories);
    const { data } = response;
    yield put(setCategories(data));
  } catch (err) {
    console.log(err);
  }
}
