import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios'

const client: AxiosInstance = axios.create({
  baseURL: `http://localhost:3000`,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

const request = (options: AxiosRequestConfig): Promise<webapi.IResponse> => {
  return client(options).then((res: AxiosResponse<webapi.IResponse>) => {
    return res.data
  })
}

export default request
