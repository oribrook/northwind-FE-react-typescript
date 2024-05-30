import axios from "axios";
import { appConfig } from "../utils/config";

export async function apiCall(
  url: string,
  method: string = "GET",
  headers: object = {},
  data: object = {}
) {
    try {
        const url_ = appConfig.serverUrl + url;
    const res = await axios(url_, { method, headers, data });
    return { isOk: true, data: res.data };
    } catch (error: any) {
      console.log(error);
      
    return { isOk: false, errorMessage: error.message, data: error.response?.data };
  }
}
