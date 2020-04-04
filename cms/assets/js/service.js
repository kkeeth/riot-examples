const service = (store) => {
  const login = () => {
    store.update({
      isLoggedIn: true
    })
  }
  const logout = () => {
    store.update({
      isLoggedIn: false
    })
  }

  return {
    login: login,
    logout: logout
  }
}

export default service
