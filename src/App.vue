<script setup lang="ts">
import {
  Header,
  Banner,
  Welcome,
  InfoCompany,
  PrincipalsClients,
  Contact,
  Footer,
} from "./components"
</script>
<template>
  <div class="flex flex-col h-full">
    <Header />

    <Banner />

    <div data-aos="zoom-in">
      <Welcome />
    </div>

    <div data-aos="zoom-in">
      <InfoCompany />
    </div>
    <div data-aos="zoom-in">
      <PrincipalsClients />
    </div>
    <div data-aos="zoom-in" data-aos-duration="1000">
      <Contact />
    </div>
    <div class="hidden md:block">
      <Footer />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
