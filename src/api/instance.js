import axios from 'axios'
import mStore from '@/store'
const store=mStore;
const defaultOpts = {
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
}

const instance = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  ...defaultOpts,
})

instance.interceptors.request.use(async (config) => {
  let token = store.getters['getToken']
  if (!token) {
    await store.dispatch('fetchToken')
  }
  token = store.getters['getToken']
  if (token) {
    config.headers.common['Authorization'] = `Bearer ${token}`
  }
  return config
})

instance.interceptors.response.use(async res => {
  store.dispatch('resetError')
  return res
}, error => {
  store.dispatch('setError', {
    code: 991,
    message: `Failed to connect to spotify server`,
  })
  return Promise.reject(error)
})

instance.interceptors.response.use(async res => {
  if (res.status === 401) {//Token invalid, refreshing
    store.dispatch('fetchToken')
  }
  return res
})

export default instance;


