<template>
  <div>
    <h3 class="text-lg leading-6 font-medium text-gray-900 bg-gray-100 px-4 py-2">
      Channels
    </h3>
    <div>
      <ul class="divide-y">
        <li
          v-for="(item, index) in channels"
          :key="index"
        >
          <a
            class="cursor-pointer w-full h-full hover:bg-gray-100 block px-4 py-2"
            @click.prevent="handleSelectChannel(item.name)"
          >{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useChannelStore } from '../stores/channels'

export default defineComponent({
  setup() {
    const channelStore = useChannelStore()
    return {
      channelStore,
      channels: ref([
        {
          id: 1,
          name: 'public-channel',
        },
      ]),
    }
  },

  methods: {
    handleSelectChannel(channel: string) {
      this.channelStore.setChannel(channel)
    },
  },
})
</script>

<style>
</style>
