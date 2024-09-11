<template>
  <header class="bg-slate-700 flex justify-center">
    <div class="contact-header container">
      <div class="flex items-center justify-center gap-2 font-semibold">
        <div class="flex gap-2 items-center" v-if="show">
          <Icon name="phone" type="fas" />
          <span>19 99999-9999</span>
        </div>

        <div>|</div>

        <div class="flex gap-2 items-center" v-if="show">
          <Icon name="envelope" type="fas" />
          <span>19 99999-9999</span>
        </div>
      </div>

      <div class="social-header flex items-center gap-6">
        <Icon name="facebook" />
        <Icon name="instagram" />
        <Icon name="twitter" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
import Icon from "../Icon.vue"

const show = ref(false)
onMounted(() => {
  setTimeout(() => {
    show.value = true
  }, 100)
})
</script>

<style scoped lang="scss">
.contact-header {
  @apply text-white py-3 px-10 justify-between  hidden sm:flex;
}
</style>
