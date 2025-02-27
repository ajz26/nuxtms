export function useApiFetch() {

  return {
    get: <T>(url: string, options = {}) => {
      return useFetch(url, {
        ...options,
        lazy: true,
        $fetch: useNuxtApp().$apiFetch,
      })
    },
    post: <T>(url: string, options = {}) => {
      return useFetch(url, {
        ...options,
        $fetch: useNuxtApp().$apiFetch,
      })
    },

    put: <T>(url: string, options = {}) => {
      return useFetch(url, {
        ...options,
        $fetch: useNuxtApp().$apiFetch,
      })
    },

    delete: <T>(url: string, options = {}) => {
      return useFetch(url, {
        ...options,
        $fetch: useNuxtApp().$apiFetch,
      })
    }
  }
}
