<template>
  <section class="banner">
    <div class="container">
      <nav class="banner-nav flex justify-between items-center">
        <div>
          <img
            width="350"
            src="/images/logo/logo-white-fill-removebg.png"
            alt="Logotipo da empresa quatro r tech."
          />
        </div>
        <menu>
          <ul class="flex items-center gap-4 font-semibold">
            <li>
              <button class="nav-button" type="button">Home</button>
            </li>
            <button class="nav-button" type="button">Sobre nós</button>
            <button class="nav-button" type="button">Clientes</button>
            <button class="nav-button" type="button">Contato</button>
          </ul>
        </menu>
      </nav>
      <div class="title-header flex flex-col grow justify-center gap-10">
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
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.banner {
  background-image: url("../../../public/banner-home.jpg");
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
</style>
