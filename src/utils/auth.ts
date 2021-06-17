
const TOKEN_KEY = 'access_token'
const REGRESH_TOKEN_KEY = 'refresh_token'

export const getToken = () => window.localStorage.getItem(TOKEN_KEY)

export const setToken = (token: string) => {
  window.localStorage.setItem(TOKEN_KEY, token)
}

export const removeToken = () => {
  window.localStorage.removeItem(TOKEN_KEY)
}

export const setRefreshToken = (token: string) => {
  window.localStorage.setItem(REGRESH_TOKEN_KEY, token)
}
