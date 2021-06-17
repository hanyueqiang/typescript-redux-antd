import axios, { AxiosRequestConfig, CancelTokenStatic } from 'axios'
import { message} from 'antd';
import { getToken, removeToken } from './auth'
// import qs from 'qs'
import baseUrl from "../config/baseUrl";

/**
 * 根据不同环境设置不同的请求地址
 * 把返回值赋给axios.defaults.baseURL即可
 */
function getBaseUrl () {
  switch(process.env.NODE_ENV){
    case 'development': return baseUrl.devUrl;
    case 'test': return baseUrl.testUrl;
    case 'production' : return baseUrl.proUrl;
    default : return baseUrl.proUrl;
  }
}

class Request {
  protected baseURL: any = getBaseUrl()
  protected service: any = axios
  protected pending: Array<{
    url: string,
    cancel: () => void
  }> = []
  protected CancelToken: CancelTokenStatic = axios.CancelToken
  protected axiosRequestConfig: AxiosRequestConfig = {}
  protected successCode: Array<number> = [200, 201, 204]
  private static _instance: Request;

  constructor() {
    this.requestConfig()
    this.service = axios.create(this.axiosRequestConfig)
    this.interceptorsRequest()
    this.interceptorsResponse()
  }

  public static getInstance() : Request {
    // 如果 instance 是一个实例 直接返回，  如果不是 实例化后返回
    this._instance || (this._instance = new Request())
    return this._instance
  }

  protected requestConfig(): void {
    this.axiosRequestConfig = {
      baseURL: this.baseURL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
        // timestamp: new Date().getTime(),
      },
      timeout: 15000,
    }
  }

  protected interceptorsRequest() {
    this.service.interceptors.request.use(
      (config: any) => {
        this.removePending(config)
        config.CancelToken = new this.CancelToken((c: any) => {
          this.pending.push({ url: `${config.url}/${JSON.stringify(config.data)}&request_type=${config.method}`, cancel: c })
        })
        const token = getToken()
        if (token) {
          config.headers.Authorization = token
        }
        return config
      },
      (error: any) => {
        return Promise.reject(error)
      }
    )
  }

  protected interceptorsResponse(): void {
    this.service.interceptors.response.use(
      (response: any) => {
        this.responseLog(response)
        this.removePending(response.config)
        if (this.successCode.indexOf(response.status) === -1) {
          message.error(response.data.message || 'Error')
          if (response.data.code === 401) {
            removeToken()
            window.location.href = `${this.baseURL}/login`
          }
          return Promise.reject(new Error(response.message || 'Error'))
        } else {
          return response.data
        }
      },
      (error: any) => {
        message.error(error.message || 'Error')
        return Promise.reject(error)
      }
    )
  }

  protected removePending(config: any): void {
    for (const p in this.pending) {
      const item: any = p
      const list: any = this.pending[p]
      if (list.url === `${config.url}/${JSON.stringify(config.data)}&request_type=${config.method}`) {
        list.cancel()
        console.log('=====', this.pending)
        this.pending.splice(item, 1)
        console.log('+++++', this.pending)
      }
    }
  }

  public async post(url: string, data: any = {}, config: any = {}) {
    try {
      const result = await this.service.post(url, data, config)
      return result.data
    } catch (error) {
      console.error(error)
    }
  }

  public async delete(url: string, config: any = {}) {
    try {
      await this.service.delete(url, config)
    } catch (error) {
      console.error(error)
    }
  }

  public async put(url: string, data: any = {}, config: any = {}) {
    try {
      // await this.service.put(url, qs.stringify(data), config)
      await this.service.put(url, data, config)
    } catch (error) {
      console.error(error)
    }
  }

 public async get(url: string, parmas: any = {}, config: any = {}) {
    try {
      await this.service.get(url, parmas, config)
    } catch (error) {
      console.error(error)
    }
  }

  protected responseLog(response: any): void {
    if (process.env.NODE_ENV === 'development') {
      const randomColor = `rgba(${Math.round(Math.random() * 255)},${Math.round(
        Math.random() * 255
      )},${Math.round(Math.random() * 255)})`
      console.log(
        '%c┍------------------------------------------------------------------┑',
        `color:${randomColor};`
      )
      console.log('| 请求地址：', response.config.url)
      console.log('| 请求参数：', response.config.data)
      console.log('| 返回数据：', response.data)
      console.log(
        '%c┕------------------------------------------------------------------┙',
        `color:${randomColor};`
      )
    }
  }
}

export default Request.getInstance()
