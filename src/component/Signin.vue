<script setup lang="ts">
import { ref } from 'vue'
import BasicInput from './BasicInput.vue';
import { postJSON } from '../api-client/api-client';

const username = ref('')
const password = ref('')

function onSubmit(e: Event) {
  postJSON("/api/token", {
      username: username.value,
      password: password.value
  })
}
</script>

<template>
  <form id="signin"
  @submit.prevent="onSubmit($event)">
    <fieldset>
      <legend>Please authenticate</legend>
      <BasicInput
        id="username"
        type="text"
        label="Username"
        v-model="username"
      />
      <BasicInput
        id="password"
        type="password"
        label="Password"
        v-model="password"
      />
      <input class="btn" type="submit" value="Sign in">
    </fieldset>
  </form>
</template>