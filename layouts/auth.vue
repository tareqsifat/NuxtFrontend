<template>
    <div class="">
        <main>
            <slot />
        </main>
        <AuthFooter />
    </div>
</template>
<script>
useHead({
  link: [
    { rel: 'stylesheet', href: '/css/auth.css' }
  ]
})
</script>