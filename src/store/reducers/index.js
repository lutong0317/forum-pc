import { combineReducers } from 'redux'

// 导入子reducer
import { login } from './login'

export const rootReducer = combineReducers({
  login
})