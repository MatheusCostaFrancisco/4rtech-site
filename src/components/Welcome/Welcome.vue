<template>
  <section class="p-6 py-12 gap-6 flex justify-center">
    <div class="container flex flex-col">
      <div class="content-title text-center flex flex-col gap-4 items-center">
        <h2 class="mt-4 text-4xl font-semibold">Bem vindo a 4rtech!</h2>
        <span class="text-md max-w-5xl text-center">
          Bem-vindo ao site da 4rtech! Estamos aqui para oferecer soluções
          tecnológicas que simplificam e otimizam a gestão do seu negócio.
          Explore nossos serviços e descubra como podemos ajudar a transformar
          seus desafios em oportunidades.
        </span>
      </div>
      <div class="wrapper-cards">
        <div class="card">
          <img src="../../../public/images/card-1.jpg" alt="" />

          <h2 class="font-semibold text-lg text-center">
            Consultoria e Gestão
          </h2>
          <div>
            Em processos de negócios e novos desenvolvimentos de rotinas span
          </div>
        </div>
        <div class="card">
          <img src="../../../public/images/card-2.jpg" alt="" />

          <h2 class="font-semibold text-lg text-center">Desenvolvimentos</h2>
          <div>
            Rotinas personalizadas, Indicadores de apoio na gestão, apps
            personalizados, relatórios personalizados, dashboards, etc..
          </div>
        </div>
        <div class="card">
          <img src="../../../public/images/card-3.jpg" alt="" />

          <h2 class="font-semibold text-lg text-center">Integrações</h2>
          <div>
            Desenvolvimento de APIs e integrações entre ERP Shankya ou jiva com
            outros softwares
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.wrapper-cards {
  @apply flex justify-center gap-10 flex-wrap;
}

.card {
  width: 380px;
  @apply flex flex-col border-b-4 border-emerald-600 shadow-2xl rounded-lg p-4 items-center;
  & > img {
    width: 100%;
    height: 300px;
    background-size: contain;
  }
  & > h2 {
    margin-top: 1.5rem;
  }
}

@media screen and (min-width: 1027px) {
  .wrapper-cards {
    @apply justify-evenly gap-2;
  }
}
</style>
