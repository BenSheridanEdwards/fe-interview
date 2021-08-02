import { combineReducers } from "redux";
import categoriesReducer from "./category/categorySlice";
import merchantsReducer from "./merchant/merchantSlice";

export const reducers = combineReducers({
  merchants: merchantsReducer,
  categories: categoriesReducer
});
