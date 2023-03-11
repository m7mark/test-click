import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

export const baseApi = axios.create({
  baseURL: API_URL,
  headers: {
    'X-ZONT-Client': '@m7mark',
  },
})
