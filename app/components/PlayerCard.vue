<script lang="ts" setup>
export interface PlayerCardProps {
    player: any
}
const { player } = defineProps<PlayerCardProps>()
</script>

<template>
    <div class="card" v-if="player">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="d-flex">
            <img :src="player.avatar" class="w-50 icon-left">
            <img :src="`https://mc-heads.net/avatar/${player.uuid}`" class="w-50 icon-right">
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ player.tag }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ player.name }}</h6>
        </div>
        <div class="card-footer">
            <RouterLink :to="`/player/${player.id}`" class="btn btn-primary btn-sm">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> Details
            </RouterLink>
        </div>
    </div>
</template>


<style>
.icon-left {
    border-top-left-radius: var(--bs-card-inner-border-radius);
}
.icon-right {
    border-top-right-radius: var(--bs-card-inner-border-radius);
}
</style>