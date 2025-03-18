import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isAuthenticated = ref(false)

  function setUser(userData: any) {
    user.value = userData
    isAuthenticated.value = true
  }

  function clearUser() {
    user.value = null
    isAuthenticated.value = false
  }

  async function login(email: string, password: string) {
    try {
      // TODO: Implement login logic
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
      const data = await response.json()
      if (response.ok) {
        setUser(data.user)
        return { success: true }
      }
      return { success: false, error: data.message }
    } catch (error) {
      return { success: false, error: 'Login failed' }
    }
  }

  async function register(username: string, email: string, password: string) {
    try {
      // TODO: Implement registration logic
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      })
      const data = await response.json()
      if (response.ok) {
        setUser(data.user)
        return { success: true }
      }
      return { success: false, error: data.message }
    } catch (error) {
      return { success: false, error: 'Registration failed' }
    }
  }

  async function logout() {
    try {
      // TODO: Implement logout logic
      await fetch('/api/auth/logout', {
        method: 'POST',
      })
      clearUser()
      return { success: true }
    } catch (error) {
      return { success: false, error: 'Logout failed' }
    }
  }

  return {
    user,
    isAuthenticated,
    login,
    register,
    logout,
  }
}) 