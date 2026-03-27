<script lang="ts" setup>
import type { PageModel } from '~/models/page.model';
import type { PlayerModel } from '~/models/player.model';

const pageNumber = ref<number>(0)
const url = computed(() => `https://cache.samifying.com/api/data?page=${pageNumber.value}&size=30&sort=id,desc`)
const { data, pending, error } = useFetch<PageModel<PlayerModel>>(url,
    {
        watch: [pageNumber]
    }
)

function loadFirst() {
    pageNumber.value = 0
}

function loadLast() {
    if (data.value == null) return
    pageNumber.value = data.value?.totalPages - 1
}

function loadPrev() {
    if (pageNumber.value > 0) pageNumber.value--
    console.log(0, pageNumber.value)
}

function loadNext() {
    if (!data.value?.last) pageNumber.value++
    console.log(1, pageNumber.value)
}
</script>

<template>
    <div class="mx-auto d-flex gap-1 mb-3">
        <button type="button" class="btn btn-secondary" @click="loadFirst">First</button>
        <button type="button" class="btn btn-primary" @click="loadPrev">Prev</button>
        <span>{{ pageNumber + 1 || '1' }}</span>
        <button type="button" class="btn btn-primary" @click="loadNext">Next</button>
        <button type="button" class="btn btn-secondary" @click="loadLast">Last</button>
    </div>

    <div v-if="pending">Data is loading...</div>
    <div v-else-if="error">Somtehing went wrong: {{ error }}</div>
    <div class="player-wrapper" v-else>
        <PlayerCard v-for="player in data?.content" :player="player" />
    </div>
</template>

<style>
.player-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
}
</style>