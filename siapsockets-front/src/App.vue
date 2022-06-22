<template>
  <div>
    <Toolbar />
    <div class="max-w-5xl mx-auto my-6">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Toolbar from './components/Toolbar.vue'

export default defineComponent({
  components: { Toolbar },
})
</script>
