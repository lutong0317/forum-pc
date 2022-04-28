export const getToken = () => {
  return localStorage.getItem('forum-pc-token')
}

export const setToken = token => {
  return localStorage.setItem('forum-pc-token', token)
}

export const clearToken = () => {
  localStorage.removeItem('forum-pc-token')
}

export const isAuth = () => !!getToken()