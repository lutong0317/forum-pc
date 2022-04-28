import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducers'

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const middlewares = composeWithDevTools(applyMiddleware(thunk))

// 为了在刷新页面时，能让redux能拿到token值。可以为createStore设置默认值
const initialState = {
  login: localStorage.getItem('forum-pc-token')
}

const store = createStore(rootReducer, initialState, middlewares)

export default store
// 配置redux中间件
// 1.引入applyMiddleware
// 2.引入thunk
// 3.引入composeWithDevTools
// 4.创建middlewares
// 5.导入middlewares