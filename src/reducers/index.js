import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import interviewReducer from './interview'

export default combineReducers({
  form: formReducer,
  interview: interviewReducer,
})
