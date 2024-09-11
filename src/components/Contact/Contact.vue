<template>
  <div class="flex flex-col h-[50rem]">
    <div class="banner-contact text-center flex flex-col gap-4">
      <h2 class="mt-4 text-4xl font-semibold">Contato</h2>
    </div>
    <div
      class="flex text-dark-500 sm:flex-row sm:gap-4 container self-center flex-col"
    >
      <div class="flex flex-col p-6 gap-4 sm:w-[70%] sm: mt-10">
        <h2 class="text-2xl">ENVIE UMA MENSAGEM:</h2>
        <Input
          label="Nome:"
          :modelValue="stateContact.name"
          id="name"
          class="text-slate-900"
          placeholder="Digite seu nome aqui"
        />
        <div class="flex w-full gap-2 flex-wrap">
          <div class="grow">
            <Input
              label="E-mail:"
              :modelValue="stateContact.mail"
              id="mail"
              placeholder="Digite seu email aqui"
            />
          </div>
          <Input
            label="Telefone:"
            :modelValue="stateContact.tel"
            id="tel"
            placeholder="19 99999-9999"
          />
        </div>
        <Textarea
          id="message"
          :modelValue="stateContact.message"
          label="Mensagem:"
          placeholder="Digite sua mensagem aqui"
        />
        <Button
          class="nav-button bg-green-500 font-semibold text-white"
          :onclick="sendEmail"
        >
          Enviar!
        </Button>
      </div>

      <div class="flex flex-col gap-3 p-6 sm:mt-10">
        <h2 class="text-2xl">DADOS PARA CONTATO:</h2>
        <div class="flex items-center gap-3">
          <Icon name="envelope" type="fas" size="lg" color="green" />
          <span class="text-lg font-semibold">contato@4rteh.com.br</span>
        </div>
        <div class="flex items-center gap-3">
          <Icon name="phone" type="fas" size="lg" color="green" />
          <span class="text-lg font-semibold">19 99999-9999</span>
        </div>
        <div class="flex items-center gap-3">
          <Icon name="whatsapp" type="fab" size="lg" color="green" />
          <span class="text-lg font-semibold">19 99999-9999</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Textarea from "../TextArea/TextArea.vue"
import Input from "../Input/Input.vue"
import Icon from "../Icon.vue"
import { ref } from "vue"

const stateContact = ref({
  name: "",
  mail: "",
  tel: "",
  message: "",
})

const sendEmail = async () => {
  try {
    const response = await fetch("./sendService.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        name: stateContact.value.name,
        email: stateContact.value.mail,
        subject: "Mensagem vinda do site",
        message: stateContact.value.message,
      }),
    })
    const result = response
    console.log(result)
  } catch (error) {
    console.error("Erro ao enviar email:", error)
  }
}
</script>

<style scoped>
.banner-contact {
  background-image: url("/banner-values.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 250px;
  @apply text-white flex items-center justify-center;
}
.nav-button {
  @apply border p-4 rounded hover:bg-emerald-300 hover:text-black hover:border-emerald-300;
}
</style>
