export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const axios = $fetch.create({
    baseURL: config.public.apiBase,
    credentials: 'include'
  })

  return {
    provide: {
      axios
    }
  }
})