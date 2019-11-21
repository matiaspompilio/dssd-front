import axios from 'axios'

export default axios.create({
  // baseURL: process.env.APIURL || '/api',
  baseURL: 'https://dssd2019grupo4.herokuapp.com/api'
})
