<script lang="ts" setup>
import type { PlayerModel } from '~/models/player.model';

export interface PlayerCardProps {
    player: PlayerModel
}
const { player } = defineProps<PlayerCardProps>()

const router = useRouter()    
</script>

<template>
    <div class="card" v-if="player" @click="router.push(`/player/${player.id}`)">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="d-flex">
            <img :src="player.avatar" class="w-50 icon-left">
            <img :src="`https://mc-heads.net/avatar/${player.uuid}`" class="w-50 icon-right">
        </div>
        <div class="card-body text-center">
            <h5 class="card-title">{{ player.tag }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ player.name }}</h6>
        </div>
    </div>
</template>


<style scoped>
.card {
    cursor: pointer;
    width: 200px;
}

.card:hover {
    transform: scale(1.05);
}

.icon-left {
    border-top-left-radius: var(--bs-card-inner-border-radius);
}
.icon-right {
    border-top-right-radius: var(--bs-card-inner-border-radius);
}
</style>