import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import LaravlEcho from './plugins/LaravelEcho'
// import { io } from 'socket.io-client'
import pusherJs from 'pusher-js'
import { routes } from './routes'
import './index.css'
import { createPinia } from 'pinia'
window.Pusher = pusherJs
// window.io = io

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: import.meta.hot ? [] : routes,
})

if (import.meta.hot) {
  const removeRoutes = []

  for (const route of routes) {
    removeRoutes.push(router.addRoute(route))
  }
}
if (import.meta.hot) {
  import.meta.hot?.accept('./routes.ts', ({ routes }) => {
    for (const removeRoute of removeRoutes) removeRoute()
    removeRoutes = []
    for (const route of routes) {
      removeRoutes.push(router.addRoute(route))
    }
    router.replace('')
  })
}

app.use(router)
  .use(createPinia())
  .use(LaravlEcho, {
    broadcaster: 'pusher',
    key: 'app-key',
    wsHost: window.location.hostname,
    wsPort: 6001,
    forceTLS: false,
    encrypted: true,
    enableLogging: true,
    disableStats: true,
    enabledTransports: ['ws', 'wss'],
  })
  .mount('#app')
