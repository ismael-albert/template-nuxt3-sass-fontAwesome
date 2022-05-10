import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        link: [
          {
            href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css',
            rel: 'stylesheet',
          }
        ],
    },
    css: ["@/assets/scss/global.scss", "@/assets/scss/reset.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/scss/_variables.scss"; @import "@/assets/scss/_colors.scss";@import "@/assets/scss/_fonts.scss";',
                },
            },
        },
    },
})
