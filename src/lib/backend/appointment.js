import api from './api'

export const getAppointment = (id) => api({
  url: `/appointment?appointmentId=${id}`,
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
})

export const setAppointmentState = (id, values) => api({
  url: `/appointment/state?appointmentId=${id}`,
  method: 'PUT',
  data: values,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
})
