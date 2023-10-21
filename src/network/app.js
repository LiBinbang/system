import axios from "axios";
import this_ from "../main.js";

// 普遍请求
export function request(obj) {
  const instance = axios.create({
    baseURL: "",
    timeout: 5000,
    headers: {
      //这里请携带请求头
    },
  });
  // 请求拦截器
  instance.interceptors.request.use(
    (config) => {
      // 数据请求拦截（可在发送请求之前做某些处理）
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  // 响应拦截器
  instance.interceptors.response.use(
    (res) => {
      // 数据响应（拦截处理）
      let { code, message } = res.data;
      switch (code) {
        case 400:
          this_.$message.error(message);
          break;
        case 500:
          this_.$message.error(message);
          break;
        default:
          break;
      }
      return res;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  return instance(obj);
}
