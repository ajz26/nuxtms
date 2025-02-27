export default defineNuxtPlugin((nuxtApp) => {
  const userAuth = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfdG9rZW4iOiJmVUQ4anNNMXlremJIUTBwYm1lZiIsImVtYWlsIjoidGlsb21vdG9yQGxlYWRjYXJzLmVzIiwibmFtZSI6IkFkbWluaXN0cmFkb3IifQ.t-V4ejnEVy6N9RSTOSVn-RenF_V4iplPyBqJZ47I4S8' //useCookie('token')
  const config = useRuntimeConfig()

  const $apiFetch = $fetch.create({
    baseURL: config.public.API_URL as string,
    
    onRequest({ request, options, error }) {

      options.headers.set('Content-Type', 'application/json')
      options.headers.set('Accept', 'application/json')
      options.headers.set('api-token',"fUD8jsM1ykzbHQ0pbmef")
      options.headers.set("api-user", "tilomotor@leadcars.es")

      if (userAuth) {
        // Add Authorization header
        options.headers.set('Authorization', `Bearer ${userAuth}`)
      
      }
    },
    onResponse({ response }) {
      // response._data = new myBusinessResponse(response._data)
    },
  })
  // Expose to useNuxtApp().$apiFetch
  return {
    provide: {
      apiFetch: $apiFetch,
    },
  }
})
