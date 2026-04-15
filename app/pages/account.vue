<script lang='ts' setup>
import { PlayerService } from '~/services/player.service'
import type { Friend } from '~~/server/db/entities/Friend'

const { loggedIn, user } = useUserSession() as {
    loggedIn: Ref<boolean>
    user: Ref<any>
}
const { data: player } = PlayerService.getPlayerByDiscordId((user.value as any).id)
const {data: friends} = useFetch<Friend>('/api/friend/list')
const router = useRouter()

useHead({
    title: 'Account :: iSocial'
})

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
    <div class='container py-5'>
        <div class='row justify-content-center'>
            <div class='col-lg-8'>

                <!-- Account Card -->
                <div class='card shadow-sm mb-4'>
                    <div class='card-body d-flex align-items-center gap-3'>
                        <img :src='user?.avatar' class='rounded-circle border'
                            style='width: 72px; height: 72px; object-fit: cover;'>

                        <div>
                            <h5 class='mb-1'>
                                <i class='fa-solid fa-user me-2 text-primary'></i>
                                {{ user?.globalName || user?.username }}
                            </h5>

                            <div class='text-muted small'>
                                <i class='fa-solid fa-at me-1'></i>
                                {{ user?.username }}
                            </div>

                            <div class='text-muted small'>
                                <i class='fa-solid fa-envelope me-1'></i>
                                {{ user?.email }}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Player Section -->
                <div class='card shadow-sm'>
                    <div class='card-body'>

                        <h5 class='mb-4'>
                            <i class='fa-solid fa-gamepad me-2 text-success'></i>
                            Minecraft Account
                        </h5>

                        <!-- If player exists -->
                        <div v-if='player' class='d-flex align-items-center gap-3'>
                            <img :src='player.avatar' class='rounded border'
                                style='width: 64px; height: 64px; object-fit: cover;'>

                            <div>
                                <h6 class='mb-1'>{{ player.name }}</h6>

                                <div class='text-muted small'>
                                    <i class='fa-solid fa-fingerprint me-1'></i>
                                    {{ player.uuid }}
                                </div>

                                <div class='text-muted small'>
                                    <i class='fa-solid fa-calendar me-1'></i>
                                    Linked on {{ new Date(player.createdAt).toLocaleDateString() }}
                                </div>
                            </div>
                        </div>

                        <!-- If player NOT found -->
                        <div v-else class='text-center py-4'>
                            <div class='mb-3 fs-1 text-warning'>
                                <i class='fa-solid fa-triangle-exclamation'></i>
                            </div>

                            <h6>No linked Minecraft account</h6>

                            <p class='text-muted mb-3'>
                                You have never linked your account before.
                            </p>

                            <div class='alert alert-info text-start'>
                                <strong>
                                    <i class='fa-brands fa-discord me-2'></i>
                                    How to link your account:
                                </strong>

                                <ol class='mb-0 mt-2'>
                                    <li>Join our Discord server</li>
                                    <li>Run the command:</li>
                                    <li>
                                        <code>/verify &lt;mcusername&gt;</code>
                                    </li>
                                    <li>
                                        Make sure you are using
                                        <strong>Minecraft Java Edition</strong>
                                    </li>
                                </ol>
                            </div>

                            <a href='https://discord.gg/your-placeholder' target='_blank' class='btn btn-primary'>
                                <i class='fa-brands fa-discord me-2'></i>
                                Join Discord
                            </a>
                        </div>

                    </div>
                </div>
                <div class='card shadow-sm'>
                    <div class="card-body">
                        <pre>{{ friends }}</pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>