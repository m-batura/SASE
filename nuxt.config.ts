// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['nuxt-auth-utils'],
  runtimeConfig: {
    discordClientSecret: process.env.DISCORD_CLIENT_SECRET,
    session: {
      password: process.env.NUXT_SESSION_PASSWPRD || '',
    },
    public: {
      discordClientId: process.env.DISCORD_CLIENT_ID,
      discordRedirectUrl: process.env.DISCORD_REDIRECT_URL,
    },
  },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css',
          integrity: 'sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB',
          crossorigin: 'anonymous'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css'
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js',
          integrity: 'sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI',
          crossorigin: 'anonymous'
        }
      ],
      meta: [
        {
          name: 'description',
          content: 'Browse and find players'
        }
      ],
      htmlAttrs: {
        lang: 'en'
      },
      bodyAttrs: {
        'data-bs-theme': 'dark'
      }
    }
  },

  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  }
})