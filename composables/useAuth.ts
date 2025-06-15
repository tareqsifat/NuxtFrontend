export const useAuth = () => {
  const user = useState('auth_user', () => null)
  const token = useState('auth_token', () => null)

  const login = async (payload: { email: string; password: string }) => {
    try {
      const data = await $fetch('/login', {
        method: 'POST',
        body: payload,
        baseURL: useRuntimeConfig().public.apiBase,
        credentials: 'include'
      })
      console.log(data);
      
      user.value = data.user
      token.value = data.token
    } catch (err: any) {
      throw err.data?.message || 'Login failed'
    }
  }

  const register = async (payload: { name: string; email: string; password: string }) => {
    try {
      const data = await $fetch('/register', {
        method: 'POST',
        body: payload,
        baseURL: useRuntimeConfig().public.apiBase,
        credentials: 'include'
      })
      user.value = data.user
      token.value = data.token
    } catch (err: any) {
      throw err.data?.message || 'Registration failed'
    }
  }

  const fetchUser = async () => {
    try {
      const data = await $fetch('/user', {
        baseURL: useRuntimeConfig().public.apiBase,
        credentials: 'include'
      })
      user.value = data
    } catch {
      user.value = null
    }
  }

  const logout = async () => {
    await $fetch('/logout', {
      method: 'POST',
      baseURL: useRuntimeConfig().public.apiBase,
      credentials: 'include'
    })
    user.value = null
    token.value = null
  }

  return {
    user,
    token,
    login,
    register,
    fetchUser,
    logout
  }
}
