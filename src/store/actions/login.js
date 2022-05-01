import { setToken, http, clearToken } from '@/utils'

export const login = Logindata => {
  return async dispatch => {
    const res = await http.post('/authorizations', Logindata)
    const {
      data: { token },
      message
    } = res.data
    if (message === 'OK') {
      // localStorage.setItem('forum-pc-token', data.data.token)
      setToken(token)
      dispatch({ type: 'login/setToken', payload: token })
    }
  }
}

export const logout = () => {
  return dispatch => {
    dispatch({ type: 'login/clearToken' })
    clearToken()
    dispatch({ type: 'user/clearInfo' })
  }
}