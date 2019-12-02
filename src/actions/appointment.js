import {
  APPOINTMENT_CURRENT_GET_REQUEST,
  APPOINTMENT_CURRENT_GET_SUCCESS,
  APPOINTMENT_CURRENT_GET_FAILURE,
  APPOINTMENT_STATE_SET_REQUEST,
  APPOINTMENT_STATE_SET_SUCCESS,
  APPOINTMENT_STATE_SET_FAILURE
} from 'src/constants'

import * as appointmentBackend from 'src/lib/backend/appointment'


export const getAppointment = (id) => (dispatch) => {
  dispatch({ type: APPOINTMENT_CURRENT_GET_REQUEST })
  return appointmentBackend.getAppointment(id)
    .then((response) => {
      dispatch({ type: APPOINTMENT_CURRENT_GET_SUCCESS, payload: response.data })
    })
    .catch((err) => {
      dispatch({ type: APPOINTMENT_CURRENT_GET_FAILURE, payload: err })
    })
}

export const setAppointmentState = (values) => (dispatch) => {
  dispatch({ type: APPOINTMENT_STATE_SET_REQUEST })
  return appointmentBackend.setAppointmentState(values)
    .then((response) => {
      dispatch({ type: APPOINTMENT_STATE_SET_SUCCESS, payload: response })
    })
    .catch((err) => {
      dispatch({ type: APPOINTMENT_STATE_SET_FAILURE, payload: err })
    })
}

export const getNextStates = () => null
