import axios from 'axios'
import store from '@/store'
import { message } from 'antd'
import { logout } from '@/store/actions'
import { customHistory } from './history'

const http = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0',
  timeout: 1000
})

// 拦截器处理 请求拦截器
http.interceptors.request.use(config => {
  // 获取token
  const { login: token } = store.getState()
  // 除了登录请求外,其他请求同意添加token
  if (!config.url.startsWith('/authorizations')) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// 响应拦截器
// 因为现在只需要处理 请求失败的情况，所以，第一个参数（请求成功的回调）就不需要处理
// 所以，直接传入 undefined 即可
http.interceptors.response.use(undefined, error => {
  if (!error.response) {
    message.error('网络繁忙，请稍后再试')
    return Promise.reject(error)
  }

  if (error.response.status === 401) {
    message.error(error.response.data?.message, 1.5, () => {
      // 跳转到登录页，并携带当前要访问的页面，这样，登录后可以继续返回该页面
      customHistory.push('/login', {
        from: customHistory.location.pathname
      })
      // 删除token
      store.dispatch(logout())
    })
  }

  return Promise.reject(error)
})

export { http }