<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-orange-50">
    <div class="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-lg">
      <h1 class="text-2xl font-bold text-center text-gray-900">Sign In</h1>
      <form class="space-y-6" @submit.prevent="handleSubmit">
        <div class="space-y-2">
          <label for="email" class="text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <div class="space-y-2">
          <label for="password" class="text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <button type="submit" class="w-full px-4 py-2 text-white bg-orange-400 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">Sign In</button>
      </form>
      <p class="text-center text-sm text-gray-600 mt-4">
        Don't have an account?
        <router-link to="/signup" class="text-orange-500 hover:underline">Sign Up</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

const handleSubmit = async () => {
  try {
    // TODO: Implement sign in logic
    console.log('Sign in:', { email: email.value, password: password.value })
  } catch (error) {
    console.error('Sign in error:', error)
  }
}
</script>