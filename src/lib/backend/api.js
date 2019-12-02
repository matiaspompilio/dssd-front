import axios from 'axios'

export default axios.create({
  // baseURL: process.env.APIURL || '/api',
  // baseURL: 'http://192.168.0.99:8080/api'
  baseURL: 'https://dssd2019grupo4.herokuapp.com/api/'
})
