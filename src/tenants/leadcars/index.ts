import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
    // Your plugin code here
    nuxtApp.provide('myPlugin', {
        sayHello() {
            console.log('Hello from my plugin!')
        }
    })
})