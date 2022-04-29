import { combineReducers } from 'redux'

// 导入子reducer
import { login } from './login'
import { user } from './user'

export const rootReducer = combineReducers({
  login,
  user
})