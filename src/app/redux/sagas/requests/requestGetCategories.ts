import axios from "axios";

export function requestGetCategories() {
  return axios.request({
    method: "get",
    url: "http://localhost:3002/categories"
  });
}
