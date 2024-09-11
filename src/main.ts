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
import AnimateOnScroll from "primevue/animateonscroll"
import AOS from "aos"
import "aos/dist/aos.css" // You can also use <link> for styles

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
  unstyled: true,
  theme: {
    preset: Aura,
    options: {
      prefix: "p",
      darkModeSelector: "class",
    },
  },
})
app.directive("animateonscroll", AnimateOnScroll)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount("#app")

AOS.init()

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
})
