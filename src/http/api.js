/*
 * @Description:
 * @Version: 2.0
 * @Autor: lwq
 * @Date: 2021-09-22 17:07:31
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-22 17:25:23
 */
import http from "./request"
//请求示例
//get
export const mokeGet = (data) => {
  return axios({
    url: "/api/v3/place/text?parameters",
    method: "get",
    data,
    config: {
      headers: {
        'Request-Type': 'wechat'
      },
      timeout: 10000
    }
  })
}
//post
export const mokePost = (data) => {
  return axios({
    url: "/api/xxxx",
    method: "post",
    data,
    config: {
      headers: {
        'Request-Type': 'wechat'
      },
      timeout: 10000
    }
  })
}
