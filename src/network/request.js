import { request } from "./app";

// get请求只能用params,post请求用data或者是params

//XXX数据请求
export const XXX = (config)=> {
  return request({
    method: "get",
    url: "",
    params: config,
  });
}
