<template>
  <font-awesome-icon
    :icon="[`${type || 'fab'}`, `${name || 'circle-question'}`]"
    :size="`${size || ''}`"
  />
</template>

<script setup lang="ts">
defineProps(["type", "name", "size"])
</script>

<style scoped></style>
