<script lang="ts" setup>
const { data } = useFetch<any>("https://cache.samifying.com/api/data?page=0&size=30&sort=id,desc")
</script>

<template>

    <div class="player-wrapper" v-if="data.content">
        <div class="player-crad" v-for="player in data.content">
            <PlayerCard :player="player" />
        </div>
    </div>
    <pre>{{ data }}</pre>
</template>

<style>
.player-card{
    width: 14rem;
}

.player-wrapper{
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
}
</style>