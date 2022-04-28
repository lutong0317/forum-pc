// login模块，只需要存储token状态值。所以，此处默认值给空字符串就可以了
const initialState = ''

export const login = (state = initialState, action) => {
  switch (action.type) {
    case 'login/setToken':
      return action.payload
    default:
      return state
  }
}