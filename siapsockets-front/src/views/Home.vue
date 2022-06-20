<template>
  <HelloWorld msg="Vue 3, Vite, TypeScript & Tailwind CSS" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import HelloWorld from '../components/HelloWorld.vue'

export default defineComponent({
  components: {
    HelloWorld,
  },

  mounted() {
    // console.log('Mounted', this.$echo)
    this.$echo.channel('public-channel')
      .listen('.NewMessage', async (data: unknown) => {
        console.log('New message received', data)
      })
  },
})
</script>
