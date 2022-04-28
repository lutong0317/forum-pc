import axios from 'axios'

export const login = Logindata => {
  return async dispatch => {
    const { data } = await axios.post('http://geek.itheima.net/v1_0/authorizations', Logindata)
    console.log(data);
    if (data.message === 'OK') {
      localStorage.setItem('forum-pc-token', data.data.token)
      dispatch({ type: 'login/setToken', payload: data.data.token })
    }
  }
}