<template>
  <section class="py-16">
    <div
      class="content-title text-center flex flex-col gap-4 items-center mt-4"
    >
      <h2 class="mt-4 text-4xl font-semibold">Principais clientes</h2>
    </div>

    <div class="px-5">
      <Carousel
        :value="images"
        :numVisible="3"
        :numScroll="3"
        :responsiveOptions="responsiveOptions"
        :pt="preset"
      >
        <template #item="slotProps">
          <a :href="slotProps.data.link" target="_blank" class="self-center">
            <div class="rounded m-2 p-4">
              <img width="300" height="300" :src="slotProps.data.path" />
            </div>
          </a>
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue"
import Carousel from "primevue/carousel"
import Sopenus from "../../assets/images/clients/Sopneus.png"
import Artivinco from "../../assets/images/clients/logo_artivinco.png"
import RealLogo from "../../assets/images/clients/logo.png"
import CasaHidro from "../../assets/images/clients/casadahidraulica.png"
import Borracha from "../../assets/images/clients/borrachas.svg"
import Engtubo from "../../assets/images/clients/engtubo2.png"
import StMetals from "../../assets/images/clients/stmetals.png"
import OdontoMaster from "../../assets/images/clients/odontomaster.png"
import LogoBrudovan from "../../assets/images/clients/Logo_Brudovan.png"
import Ananda from "../../assets/images/clients/channels4_profile.jpg"
import preset from "./preset"
const images = ref<
  Array<{
    name?: string
    path: any
    link: string
  }>
>([
  {
    name: "Só pneus Logo",
    path: Sopenus,
    link: "https://www.sopneus.com.br/",
  },
  {
    name: "Real Logo",
    path: RealLogo,
    link: "https://www.realvedacoes.com.br/",
  },
  {
    name: "Artevinco logo",
    path: Artivinco,
    link: "https://www.artivinco.com.br/",
  },
  {
    name: "Casa da hidraulica",
    path: CasaHidro,
    link: "https://www.sopneus.com.br/",
  },
  {
    name: "Shopping da borracha",
    path: Borracha,
    link: "https://www.shoppingborrachas.com.br/",
  },
  {
    name: "Engetubo logo",
    path: Engtubo,
    link: "https://engetubo.com.br/",
  },
  {
    name: "St Metals Logo",
    path: StMetals,
    link: "https://www.stmetals.com.br/index.php/br/",
  },
  {
    name: "Odontomaster Logo",
    path: OdontoMaster,
    link: "https://www.odontomaster.com.br/",
  },
  {
    name: "Brudovan Logo",
    path: LogoBrudovan,
    link: "https://brudovan.com.br/",
  },
  {
    name: "Ananda Urbanizadora Logo",
    path: Ananda,
    link: "https://anandaurbanizadora.com.br/",
  },
])

const responsiveOptions = ref([
  {
    breakpoint: "1400px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "700px",
    numVisible: 1,
    numScroll: 1,
  },
])
</script>

<style scoped></style>
