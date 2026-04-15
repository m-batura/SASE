<script lang="ts" setup>
import { PlayerService } from '~/services/player.service';

const route = useRoute()
const { data, pending, error } = PlayerService.getPlayerById(route.params.id)

const pageTitle = computed(() => `${data.value ? data.value.name : 'Player'} :: iSocial`)

useHead({
    title: pageTitle
})
</script>

<template>
    <Loading v-if="pending" />
    <ErrorCard v-else-if="error">
        <p v-if="error.statusCode == 404">Player not found!</p>
        <p v-else>{{ error }}</p>
    </ErrorCard>
    <div class="row" v-else>
        <div class="col-12 col-md-6">
            <div class="d-flex">
                <img :src="data?.avatar" class="w-50" />
                <img :src="`https://mc-heads.net/avatar/${data?.uuid}`" class="w-50" />
            </div>
        </div>
        <div class="col-12 col-md-6">
            <div class="card">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        Minecraft: <span class="fw-bold">{{ data?.name }}</span>
                    </li>
                    <li class="list-group-item">
                        Discord: <span class="fw-bold">{{ data?.name }}</span>
                    </li>
                    <li class="list-group-item">
                        UUID: <span class="fw-bold">{{ data?.uuid }}</span>
                    </li>
                    <li class="list-group-item">
                        ID: <span class="fw-bold">{{ data?.discordId }}</span>
                    </li>
                    <li class="list-group-item">
                        Created At: <span class="fw-bold">
                            {{ new Date(data!.createdAt).toLocaleString() }}
                        </span>
                    </li>
                </ul>
                <div class="card-footer">
                    <a :href="`/api/friend/${data?.id}`" class="btn btn-success">Add Friend</a>
                </div>
            </div>
        </div>
    </div>
</template>