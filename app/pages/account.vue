<script lang="ts" setup>
import type { PlayerModel } from '~/models/player.model'

const { loggedIn, user, clear, fetch } = useUserSession()
const { data: player } = useFetch<PlayerModel>('https://cache.samifying.com/api/data/discord/'+ (user.value as any).id)
const router = useRouter()

onMounted(() => {
    if (!loggedIn.value) {
        router.push('/')
        return
    }
})

watch(loggedIn, () => {
    if (!loggedIn.value) {
        router.push('/')
        return
    }
})
</script>

<template>
    <pre>{{ user }}</pre>
    <hr>
    <pre>{{ player ?? 'No player found' }}</pre>
</template>