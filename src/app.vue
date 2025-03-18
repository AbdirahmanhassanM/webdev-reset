<script lang="ts" setup>
import { RouterView } from 'vue-router';

import AppHeader from './components/AppHeader.vue';
</script>

<template>
  <AppHeader />
  <main>
    <header>
      <RouterLink to="/signin">Sign in</RouterLink>
      <RouterLink to="/signup">Sign up</RouterLink>
    </header>
    <RouterView />
  </main>
</template>