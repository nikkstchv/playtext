import { defineNuxtPlugin } from '#app'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css' // if needed

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, {
    transition: 'Vue-Toastification__slideBlurred',
    maxToasts: 20,
    newestOnTop: true,
    position: 'bottom-center',
    timeout: 2030,
    closeOnClick: true,
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    // closeButton: "button",
    icon: false,
    rtl: false,
  })
})
