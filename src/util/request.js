import axios from "axios";
import { notification } from "ant-design-vue";
import $ from "jquery";

function request(options) {
  let base = {
    baseURL: process.env.VUE_APP_BASE_API
  };
  options = $.extend(true, base, options);
  return axios(options)
    .then(res => {
      return res;
    })
    .catch(error => {
      const {
        response: { status, statusText }
      } = error;
      notification.error({
        message: status,
        description: statusText
      });
      return Promise.reject(error);
    });
}

export default request;
