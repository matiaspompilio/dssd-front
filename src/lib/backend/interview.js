import moment from 'moment-timezone'
import api from './api'


export const addInterview = ({ date, ...values }) => api({
  url: '/appointment',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  data: {
    date: moment(date).format('DD-MM-YYYY'),
    ...values,
  },
})

export const getAllLocations = () => api({
  url: '/location',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
})

export const getAllUsers = () => api({
  url: '/beauty/getAllUsers',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
})

export const getRecommendations = ({ date, ...values }) => api({
  url: '/appointment/recommendations',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  params: {
    date: moment(date).format('DD-MM-YYYY'),
    ...values,
  }
})
