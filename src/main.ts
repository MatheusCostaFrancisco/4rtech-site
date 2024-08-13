import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"
import { faEye, faQuestionCircle } from "@fortawesome/free-regular-svg-icons"
import {
  faPhone,
  faEnvelope,
  faMountainSun,
  faHeartCircleCheck,
} from "@fortawesome/free-solid-svg-icons"

import PrimeVue from "primevue/config"
import Aura from "@primevue/themes/aura"

const app = createApp(App)

library.add([
  faFacebook,
  faInstagram,
  faTwitter,
  faQuestionCircle,
  faPhone,
  faEnvelope,
  faEye,
  faMountainSun,
  faHeartCircleCheck,
  faWhatsapp,
])
app.use(PrimeVue, {
  dark: false,
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: "class",
    },
  },
})
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount("#app")
