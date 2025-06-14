<template>
  <div >
    <h3 >Login</h3>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'auth'
});

const form = reactive({ email: '', password: '' })
const error = ref('')
const loading = ref(false)
const { login } = useAuth()

async function handleLogin() {
  error.value = ''
  loading.value = true
  try {
    await login(form)
    await navigateTo('/')
  } catch (err: any) {
    error.value = err
  } finally {
    loading.value = false
  }
}
</script>