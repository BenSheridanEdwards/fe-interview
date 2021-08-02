import axios from "axios";

export function requestUpdateMerchant(id: string, data: {}): Promise<any> {
  return axios.request({
    method: "put",
    url: ` http://localhost:3002/merchants/${id}`,
    data
  });
}
