<template>
  <section class="banner-values flex justify-center px-6 py-10 text-white">
    <div class="container">
      <div class="content-title flex flex-col gap-8 items-center">
        <h2 class="mt-4 text-4xl font-semibold">Sobre nós!</h2>
        <Timeline align="alternate" :value="valuesCompany">
          <template #marker="slotProps">
            <span
              class="flex w-24 h-24 items-center justify-center text-white rounded-full z-10 shadow-sm"
              :style="{ backgroundColor: slotProps.item.color }"
            >
              <Icon
                size="2xl"
                :name="slotProps.item.icon"
                :type="slotProps.item.iconType"
              />
            </span>
          </template>

          <template #content="slotProps">
            <h3 class="text-xl font-semibold">{{ slotProps.item.title }}</h3>
            <span class="text-lg">{{ slotProps.item.text }}</span>
          </template>
        </Timeline>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Timeline from "primevue/timeline"
import Icon from "../Icon.vue"

const valuesCompany = [
  {
    title: "Missão",
    icon: "mountain-sun",
    iconType: "fas",
    color: "Green",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum urna non nulla pulvinar consectetur. Donec eleifend metus magna. Praesent rhoncus sollicitudin sem, nec fringilla tortor posuere at.",
  },
  {
    title: "Visão",
    icon: "eye",
    iconType: "far",
    color: "Green",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum urna non nulla pulvinar consectetur. Donec eleifend metus magna. Praesent rhoncus sollicitudin sem, nec fringilla tortor posuere at.",
  },
  {
    title: "Valores",
    icon: "heart-circle-check",
    iconType: "fas",
    color: "Green",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum urna non nulla pulvinar consectetur. Donec eleifend metus magna. Praesent rhoncus sollicitudin sem, nec fringilla tortor posuere at.",
  },
]
</script>

<style scoped>
.banner-values {
  background-image: url("../../../public/banner-values.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  min-height: 550px;
}
</style>
