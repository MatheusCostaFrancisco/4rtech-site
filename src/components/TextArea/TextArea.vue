<template>
  <div class="flex flex-col gap-2 font-semibold">
    <label :for="$attrs.id as string">{{ label }}</label>
    <Textarea
      :id="$attrs.inputId"
      v-model="$props.modelValue"
      rows="5"
      cols="30"
      :ptOptions="{ mergeOptions: false }"
      maxlength="300"
      :pt="preset"
    />
  </div>
</template>

<script setup lang="ts">
import Textarea from "primevue/textarea"
import preset from "./preset"

defineProps(["label", "modelValue"])
defineOptions({
  inheritAttrs: false,
})
</script>

<style scoped></style>
