<template>
  <section class="py-16">
    <div
      class="content-title text-center flex flex-col gap-4 items-center mt-4"
    >
      <h2 class="mt-4 text-4xl font-semibold">Principais clientes</h2>
    </div>

    <div class="carousel">
      <Carousel
        :value="images"
        :numVisible="6"
        :numScroll="6"
        :responsiveOptions="responsiveOptions"
      >
        <template #item="slotProps">
          <div class="rounded m-2 p-4">
            <img width="100" height="100" :src="slotProps.data.path" />
          </div>
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
import Carousel from "primevue/carousel"

const imagesPath = import.meta.glob(
  "@/assets/images/clients/*.{jpg,jpeg,png,gif,webp}"
)

console.log(imagesPath)

const images = ref<
  Array<{
    name?: string
    path: any
  }>
>([])

onMounted(() => {
  images.value = Object.entries(imagesPath).map(([path, _]) => {
    return {
      name: path.split("/").pop(),
      path: `${path}`,
    }
  })

  console.log(images.value)
})

const responsiveOptions = ref([
  {
    breakpoint: "1400px",
    numVisible: 4,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 4,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 2,
    numScroll: 1,
  },
])
</script>

<style scoped></style>
