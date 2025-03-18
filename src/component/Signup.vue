<script lang="ts" setup>
import { ref } from 'vue'
import BasicInput from './BasicInput.vue'
import { postJSON } from '../api-client/api-client'

const username = ref('')
const email = ref('')
const password = ref('')

function onSubmit (e: Event) {
  postJSON("/api/users", {
      username: username.value,
      password: password.value,
      email: email.value
  })
}
</script>

<template>
  <form
    id="signup"
    @submit.prevent="onSubmit($event)"
  >
    <fieldset>
      <legend class="with-before">Please fill in the form</legend>
      <BasicInput
        id="username"
        type="text"
        label="Username"
        v-model="username"
      />
      <BasicInput
        label="Email"
        type="email"
        id="email"
        v-model="email"
      />
      <BasicInput
        id="password"
        type="password"
        label="Password"
        v-model="password"
      />
    </fieldset>

    <button type="submit">Sign up</button>
  </form>
</template>