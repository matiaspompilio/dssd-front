import {
  INTERVIEW_ADD_REQUEST,
  INTERVIEW_ADD_SUCCESS,
  INTERVIEW_ADD_FAILURE,
  LOCATIONS_GET_REQUEST,
  LOCATIONS_GET_SUCCESS,
  LOCATIONS_GET_FAILURE,
  USERS_GET_REQUEST,
  USERS_GET_SUCCESS,
  USERS_GET_FAILURE,
  RECOMMENDATIONS_GET_REQUEST,
  RECOMMENDATIONS_GET_SUCCESS,
  RECOMMENDATIONS_GET_FAILURE
} from 'src/constants'

import * as interviewBackend from 'src/lib/backend/interview'


export const addInterview = (values) => (dispatch) => {
  dispatch({ type: INTERVIEW_ADD_REQUEST })
  return interviewBackend.addInterview(values)
    .then((response) => {
      dispatch({ type: INTERVIEW_ADD_SUCCESS, payload: response.data })
    })
    .catch((err) => {
      dispatch({ type: INTERVIEW_ADD_FAILURE, payload: err })
    })
}

export const getAllLocations = () => (dispatch) => {
  dispatch({ type: LOCATIONS_GET_REQUEST })
  return interviewBackend.getAllLocations()
    .then((response) => {
      dispatch({ type: LOCATIONS_GET_SUCCESS, payload: response.data })
    })
    .catch((err) => {
      dispatch({ type: LOCATIONS_GET_FAILURE, payload: err })
    })
}

export const getAllUsers = () => (dispatch) => {
  dispatch({ type: USERS_GET_REQUEST })
  return interviewBackend.getAllUsers()
    .then((response) => {
      dispatch({ type: USERS_GET_SUCCESS, payload: response.data })
    })
    .catch((err) => {
      dispatch({ type: USERS_GET_FAILURE, payload: err })
    })
}

export const getRecommendations = (data) => (dispatch) => {
  dispatch({ type: RECOMMENDATIONS_GET_REQUEST })
  return interviewBackend.getRecommendations(data)
    .then((response) => {
      dispatch({ type: RECOMMENDATIONS_GET_SUCCESS, payload: response.data })
    })
    .catch((err) => {
      dispatch({ type: RECOMMENDATIONS_GET_FAILURE, payload: err })
    })
}

export default {
  addInterview,
  getAllLocations,
  getRecommendations,
}
