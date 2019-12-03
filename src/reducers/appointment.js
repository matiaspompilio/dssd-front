import {
  APPOINTMENT_CURRENT_GET_REQUEST,
  APPOINTMENT_CURRENT_GET_SUCCESS,
  APPOINTMENT_CURRENT_GET_FAILURE,
  APPOINTMENT_STATE_SET_REQUEST,
  APPOINTMENT_STATE_SET_SUCCESS,
  APPOINTMENT_STATE_SET_FAILURE
} from 'src/constants'

import initialState from 'src/state/appointment'

const mutations = {

  [APPOINTMENT_CURRENT_GET_REQUEST]: (state) => ({
    ...state,
    currentAppointment: {
      ...state.currentAppointment,
      error: null,
      success: null,
      isFetching: true,
    }
  }),

  [APPOINTMENT_CURRENT_GET_SUCCESS]: (state, payload) => ({
    ...state,
    currentAppointment: {
      ...state.currentAppointment,
      error: null,
      success: true,
      isFetching: false,
      data: payload
    }
  }),

  [APPOINTMENT_CURRENT_GET_FAILURE]: (state, err) => ({
    ...state,
    currentAppointment: {
      ...state.currentAppointment,
      error: err,
      success: false,
      isFetching: false,
    }
  }),

  [APPOINTMENT_STATE_SET_REQUEST]: (state) => ({
    ...state,
    error: null,
    success: null,
    isFetching: true,
  }),

  [APPOINTMENT_STATE_SET_SUCCESS]: (state) => ({
    ...state,
    error: null,
    success: true,
    isFetching: false,
  }),

  [APPOINTMENT_STATE_SET_FAILURE]: (state, err) => ({
    ...state,
    error: err,
    success: false,
    isFetching: false,
  }),

}
/* eslint-disable-next-line */
export default (state = initialState, action) => (mutations.hasOwnProperty(action.type)
  ? mutations[action.type](state, action.payload)
  : state)
