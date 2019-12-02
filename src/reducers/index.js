import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import interviewReducer from './interview'
import appointmentReducer from './appointment'

export default combineReducers({
  form: formReducer,
  interview: interviewReducer,
  appointment: appointmentReducer,
})
