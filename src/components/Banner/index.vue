<template>
  <section class="banner">
    <div class="container">
      <Menubar
        :model="menuBar"
        :pt="preset"
        :pt-options="{ mergeProps: false, unstyled: true }"
      >
        <template #start>
          <Transition name="slide-fade">
            <img
              v-if="show"
              width="350"
              src="/images/logo/logo-white-fill-removebg.png"
              alt="Logotipo da empresa quatro r tech."
            />
          </Transition>
        </template>
        <div>
          <ul class="flex items-center gap-4 font-semibold">
            <li>
              <button class="nav-button" type="button">Home</button>
            </li>
            <button class="nav-button" type="button">Sobre nós</button>
            <button class="nav-button" type="button">Clientes</button>
            <button class="nav-button" type="button">Contato</button>
          </ul>
        </div>
      </Menubar>
      <Transition name="slide-fade">
        <div
          class="title-header flex flex-col grow justify-center gap-10"
          v-if="show"
        >
          <h1 class="text-3xl font-semibold">Soluções em Tecnologia</h1>
          <div class="max-w-md">
            <span
              >Facilitamos a gestão do seu negócio com soluções tecnológicas
              inovadoras que otimizam processos e aumentam a eficiência.
              Concentre-se no crescimento da sua empresa enquanto cuidamos da
              tecnologia.
            </span>
          </div>
          <div>
            <Button class="nav-button">Saiba mais!</Button>
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup lang="ts">
import Menubar from "primevue/menubar"
import preset from "../Banner/preset"
import { onMounted, ref } from "vue"

onMounted(() => {
  setTimeout(() => {
    show.value = true
  }, 100)
})

const menuBar = ref([
  {
    label: "Home",
    action: () => {},
  },
  {
    label: "Sobre nós",
    action: () => {},
  },
  {
    label: "Produtos",
    action: () => {},
  },
  {
    label: "Contato",
    action: () => {},
  },
])

const show = ref(false)
</script>

<style lang="scss" scoped>
.banner {
  background-image: url("/banner-home.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
}

.container {
  height: 100%;
  min-height: 770px;
  @apply py-3 px-10 flex flex-col text-white justify-between;
}

.banner-nav {
  width: 100%;
  height: 100%;
}
.nav-button {
  @apply border p-4 rounded hover:bg-emerald-300 hover:text-black hover:border-emerald-300;
}

.slide-fade-enter-active {
  transition: all 0.7s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
