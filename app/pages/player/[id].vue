<script lang="ts" setup>
import { PlayerService } from '~/services/player.service';

const route = useRoute()

const { data, pending, error } = PlayerService.getPlayerById(route.params.id)

const pageTitle = computed(() => `${data.value ? data.value.name : 'Player'} :: PlayerBrowser`)

useHead({
    title: pageTitle,
})
</script>

<template>
    <LoadingCard v-if="pending" />
    <ErrorCard v-else-if="error">
        <p v-if="error.statusCode == 404">Player not found</p>
        <p v-else>{{ error }}</p>
    </ErrorCard>
    <div class="row" v-else>
        <div class="col-12 col-md-6">
            <div class="d-flex">
                <img :src="data?.avatar" class="w-50 icon-left">
                <img :src="`https://mc-heads.net/avatar/${data?.uuid}`" class="w-50 icon-right">
            </div>
        </div>
        <div class="col-12 col-md-6">
            <div class="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        Minecraft: <span class="fw-bold"> {{ data?.tag }} </span>
                    </li>
                    <li class="list-group-item">
                        Discord: <span class="fw-bold"> {{ data?.name }} </span>
                    </li>
                    <li class="list-group-item">
                        Created At: <span class="fw-bold"> {{ new Date(data!.createdAt).toLocaleString() }} </span>
                    </li>
                </ul>
                <div class="card-actions">
                    TODO options - like, invite, chat, t.d
                </div>
            </div>
        </div>
    </div>
</template>