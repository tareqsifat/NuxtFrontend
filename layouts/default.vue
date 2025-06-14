<script setup>
const { user, logout } = useAuth()
</script>

<template>
  <header>
    <template v-if="user">
      <div>Welcome, {{ user?.name }}</div>
      <button @click="logout()">Logout</button>
    </template>
  </header>
  <main>
    <slot />
  </main>
</template>