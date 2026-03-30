<script lang="ts" setup>
import type { PlayerModel } from '~/models/player.model';

    const route = useRoute()

    const url = computed(() => `https://cache.samifying.com/api/data/${route.params.id}`)
    const { data, pending, error } = useFetch<PlayerModel>(url,
)

const pageTitle = computed(() => `${data.value ? data.value.name : 'Player'} :: PlayerBrowser`)

useHead({
    title: pageTitle,
})
</script>

<template>
    <LoadingCard v-if="pending"/>
    <ErrorCard v-if="error">
        <p v-if="error.statusCode == 404">Player not found</p>
        <p v-else>{{ error }}</p>
    </ErrorCard>
    <pre v-else>{{ data }}</pre>
</template>