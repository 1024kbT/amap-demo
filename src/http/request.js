/*
 * @Description: 
 * @Version: 2.0
 * @Autor: lwq
 * @Date: 2021-09-22 17:05:10
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-22 17:20:56
 */
import { request } from './index.js'
const http = {
  get (url, params) {
    const config = {
      method: 'get',
      url: url
    }
    if (params) config.params = params
    return request(config)
  },
  post (url, params) {
    const config = {
      method: 'post',
      url: url
    }
    if (params) config.data = params
    return request(config)
  },
  put (url, params) {
    const config = {
      method: 'put',
      url: url
    }
    if (params) config.params = params
    return request(config)
  },
  delete (url, params) {
    const config = {
      method: 'post',
      url: url
    }
    if (params) config.params = params
    return request(config)
  }
}
export default http
