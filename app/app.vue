<script lang="ts" setup>
const year = new Date().getFullYear()
</script>

<template>
  <div class="container">
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
    <h1>Nuxt 4 - SASE 2026</h1>
    <NuxtPage />
    <footer class="text-center">
      &copy; {{ year }} Singidunum university
    </footer>
  </div>
</template>
