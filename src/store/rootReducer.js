import { combineReducers } from 'redux'
import data from './data'
import error from './error'
import loaded from './loaded'

const rootReducer = combineReducers({
  data,
  error,
  loaded
})

export default rootReducer
