export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const query = getQuery(event)

    const code = query.code as string
    const state = query.state
    const savedState = getCookie(event, 'discord_oauth_state')

    deleteCookie(event, 'discord_oauth_state')

    const body = new URLSearchParams({
        client_id: config.public.discordClientId,
        client_secret: config.discordClientSecret,
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: config.public.discordRedirectUrl
    })

    const discordApiBase = 'https://discord.com/api'
    const token = await $fetch<any>(`${discordApiBase}/oauth2/token`, {
        method: 'POST',
        body,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })

    const discordUser = await $fetch<any>(`${discordApiBase}/users/@me`, {
        headers: {
            'Authorization': `${token.token_type} ${token.access_token}`
        }
    })

    await setUserSession(event, {
        user: {
            id: discordUser.id,
            username: discordUser.username,
            gloablname: discordUser.gloabl_name,
            email: discordUser.email ?? null,
            avatar: discordUser.avatar ? `https://cdn.discordapp.com/avatars/${discordUser.id}/${discordUser.avatar}` : `https://cdn.discordapp.com/embed/avatars/0.png`,
        },
        secure: {
            discordAccessToken: token.access_token
        }
    })

    return sendRedirect(event, '/account')
})