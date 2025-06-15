<template>
    <footer class="bg-dark text-light text-center py-3">
        &copy; {{ currentYear }} Boraq HRM. All rights reserved.
    </footer>
</template>

<script setup>
    const currentYear = new Date().getFullYear();
</script>

<style scoped>
    footer {
        background-color: #111;
        color: #bbb;
    }
</style>