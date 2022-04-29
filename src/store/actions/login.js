import { setToken, http } from '@/utils'

export const login = Logindata => {
  return async dispatch => {
    const { data } = await http.post('/authorizations', Logindata)
    console.log(data);
    if (data.message === 'OK') {
      // localStorage.setItem('forum-pc-token', data.data.token)
      setToken(data.data.token)
      dispatch({ type: 'login/setToken', payload: data.data.token })
    }
  }
}