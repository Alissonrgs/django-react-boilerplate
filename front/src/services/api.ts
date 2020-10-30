// third party imports
import axios, { AxiosRequestConfig } from 'axios'
import queryString from 'query-string'
import { isEmpty } from 'lodash'


declare const window:any
const AXIOS_CONFIG:AxiosRequestConfig = {
  headers: {
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken'
  },
  params: {
    format: 'json'
  }
}
const dj_urls = window.dj_urls

export const api = {
  get(url:string, params={}, filters={}) {
    url = dj_urls[url](params)
    const search = queryString.stringify(filters)
    if (!isEmpty(search))
      url = `${url}?${search}`
    return axios.get(url, AXIOS_CONFIG)
  },

  post(url:string, params={}, data) {
    url = dj_urls[url](params)
    return axios.post(url, data, AXIOS_CONFIG)
  },

  put(url:string, params, data, config={}) {
    url = dj_urls[url](params)
    return axios.put(url, data, { ...AXIOS_CONFIG, ...config })
  },

  patch(url:string, params, data, config={}) {
    url = dj_urls[url](params)
    return axios.patch(url, data, { ...AXIOS_CONFIG, ...config })
  },

  delete(url, params, config={}) {
    url = dj_urls[url](params)
    return axios.delete(url, { ...AXIOS_CONFIG, ...config })
  }
}