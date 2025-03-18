<script lang="ts" setup>
defineProps<{
  label: string
  id: string
  type: string
}>()
</script>

<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input :type :id>
  </div>
</template>