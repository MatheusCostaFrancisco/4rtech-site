<template>
  <div class="flex flex-col gap-2 font-semibold">
    <InputText
      :placeholder="$props.placeholder"
      class="order-1"
      :id="$attrs.id"
      v-model="$props.modelValue"
    />
    <label :for="$attrs.id as string">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import InputText from "primevue/inputtext"

defineProps(["value", "label", "modelValue", "placeholder"])
defineOptions({
  inheritAttrs: false,
})
</script>

<style scoped></style>
