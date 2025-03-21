<template>
  <div class="min-h-screen bg-orange-50">
    <nav class="bg-orange-100 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <div class="flex space-x-2">
              <router-link 
                to="/signin" 
                class="px-3 py-1 border border-gray-200 rounded bg-white text-gray-700 hover:border-gray-300"
              >
                Sign in
              </router-link>
              <router-link 
                to="/signup" 
                class="px-3 py-1 border border-gray-200 rounded bg-white text-gray-700 hover:border-gray-300"
              >
                Sign up
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <main>
      <h1 class="text-4xl font-bold text-gray-900 mt-8 text-center">Welcome to Abdirahman's page</h1>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
</script>