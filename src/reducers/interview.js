import {
  INTERVIEW_ADD_REQUEST,
  INTERVIEW_ADD_SUCCESS,
  INTERVIEW_ADD_FAILURE,
  LOCATIONS_GET_REQUEST,
  LOCATIONS_GET_SUCCESS,
  LOCATIONS_GET_FAILURE,
  RECOMMENDATIONS_GET_REQUEST,
  RECOMMENDATIONS_GET_SUCCESS,
  RECOMMENDATIONS_GET_FAILURE
} from 'src/constants'

import initialState from 'src/state/interview'

const mutations = {
  [INTERVIEW_ADD_REQUEST]: (state) => ({
    ...state,
    form: {
      ...state.form,
      error: null,
      success: null,
      isFetching: true,
    }
  }),

  [INTERVIEW_ADD_SUCCESS]: (state, data) => ({
    ...state,
    form: {
      ...state.form,
      confirm: data,
      error: null,
      success: true,
      isFetching: false,
    }
  }),

  [INTERVIEW_ADD_FAILURE]: (state, err) => ({
    ...state,
    form: {
      ...state.form,
      error: err,
      success: false,
      isFetching: false,
    }
  }),

  [LOCATIONS_GET_REQUEST]: (state) => ({
    ...state,
    error: null,
    success: null,
    isFetching: true,
  }),

  [LOCATIONS_GET_SUCCESS]: (state, payload) => ({
    ...state,
    locations: payload,
    error: null,
    success: true,
    isFetching: false,
  }),

  [LOCATIONS_GET_FAILURE]: (state, err) => ({
    ...state,
    error: err,
    success: false,
    isFetching: false,
  }),

  [RECOMMENDATIONS_GET_REQUEST]: (state) => ({
    ...state,
    error: null,
    success: null,
    isFetching: true,
  }),

  [RECOMMENDATIONS_GET_SUCCESS]: (state, payload) => ({
    ...state,
    recommendations: payload,
    error: null,
    success: true,
    isFetching: false,
  }),

  [RECOMMENDATIONS_GET_FAILURE]: (state, err) => ({
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
