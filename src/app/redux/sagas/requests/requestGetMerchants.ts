import axios from "axios";

export function requestGetMerchants() {
  return axios.request({
    method: "get",
    url: "http://localhost:3002/merchants"
  });
}
