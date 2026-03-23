<script lang="ts" setup>
const { data } = useFetch("https://cache.samifying.com/api/data/2305")
</script>

<template>
    <pre>{{ data }}</pre>
</template>