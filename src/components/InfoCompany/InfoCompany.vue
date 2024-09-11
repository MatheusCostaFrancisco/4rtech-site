<template>
  <section class="banner-values flex justify-center px-6 py-10 text-white">
    <div class="container">
      <div class="content-title flex flex-col gap-8 items-center">
        <h2 class="mt-4 text-4xl font-semibold">Sobre nós!</h2>
        <Timeline
          align="alternate"
          :value="valuesCompany"
          :pt="preset"
          :pt-options="{ mergeProps: false }"
          class="hidden sm:block"
        >
          <template #marker="slotProps">
            <span
              class="flex mt-6 w-24 h-24 items-center justify-center text-white rounded-full z-10 shadow-sm"
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
            <h3 class="text-xl font-semibold mt-6">
              {{ slotProps.item.title }}
            </h3>
            <span class="text-lg">{{ slotProps.item.text }}</span>
          </template>
        </Timeline>
        <div class="sm:hidden flex flex-col">
          <div v-for="value in valuesCompany">
            <div class="flex flex-col gap-2 items-center text-center mt-4">
              <div
                class="flex items-center justify-center w-20 h-20 rounded-full"
                :class="`bg-${value.color}-500`"
              >
                <Icon size="2xl" :name="value.icon" :type="value.iconType" />
              </div>
              <div class="ml-4">{{ value.text }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Timeline from "primevue/timeline"
import Icon from "../Icon.vue"
import preset from "./preset"

const valuesCompany = [
  {
    title: "Missão",
    icon: "mountain-sun",
    iconType: "fas",
    color: "Green",
    text: "Impulsionar o crescimento e a transformação das empresas, simplificando a gestão com soluções tecnológicas inovadoras.",
  },
  {
    title: "Visão",
    icon: "eye",
    iconType: "far",
    color: "Green",
    text: " Ser reconhecida como a principal parceira em soluções tecnológicas para o crescimento e evolução dos negócios.",
  },
  {
    title: "Valores",
    icon: "heart-circle-check",
    iconType: "fas",
    color: "Green",
    text: "Relacionamento, respeito, comprometimento, ética, transparência, otimismo e iniciativa.",
  },
]
</script>

<style lang="scss" scoped>
.banner-values {
  background-image: url("/banner-values.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  min-height: 550px;
}

@media screen and (max-width: 960px) {
  ::v-deep(.customized-timeline) {
    .p-timeline-event:nth-child(even) {
      flex-direction: row;

      .p-timeline-event-content {
        text-align: left;
      }
    }

    .p-timeline-event-opposite {
      flex: 0;
    }
  }
}
</style>
