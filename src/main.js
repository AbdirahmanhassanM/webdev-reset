import { signUp } from "./signup.js"
import { signIn } from "./signin.js"
import SignUp from './components/SignUp.vue';
import SignIn from './components/SignIn.vue';
import App from './App.vue'

import { createRouter, createWebHistory } from "vue-router"
import { ref, computed, createApp } from 'vue'
import 'uno.css'
import '@una-ui/preset/una.css'

const routes = [
  {
    name: 'Home',
    path: '/',
    redirect: '/signin'
  },
  {
    name: 'SignIn',
    path: '/signin',
    component: SignIn
  },
  {
    name: 'SignUp',
    path: '/signup',
    component: SignUp
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
  .use(router)
  .mount('#app')

// const radioButtons = document.querySelectorAll('[name="formType"]')

// function displayAppropriateForm (event) {
//   if (event.target.checked) {
//     if (event.target.value === 'signin') {
//       signupFormEl.style.display = 'none'
//       signinFormEl.style.display = ''
//       return
//     }
//     signinFormEl.style.display = 'none'
//     signupFormEl.style.display = ''
//   }
// }

// for (const radioButton of radioButtons) {
//   radioButton.addEventListener('change', displayAppropriateForm)
// }

// const signupFormEl = document.querySelector('#signup')
// const signinFormEl = document.querySelector('#signin')

// if (signupFormEl) {
//   signupFormEl.addEventListener('submit', signUp)
// }

// if (signinFormEl) {
//   signinFormEl.addEventListener('submit', signIn)
// }