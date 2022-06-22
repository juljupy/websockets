<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Juancho Polo's Websocket App Channels
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        Public and private channels list.
      </p>
    </div>
    <div class="border-t border-gray-200 flex divide-x">
      <ChannelsList class="w-[300px]" />
      <MessageList
        class="flex-1"
        :channel="channelStore.selectedChannel"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ChannelsList from './ChannelsList.vue'
import MessageList from './MessageList.vue'
import { useChannelStore } from '../stores/channels'


export default defineComponent({
  components: { ChannelsList, MessageList },
  setup() {
      const channelStore = useChannelStore()
      return {
        channelStore,
      }
  },
})
</script>

<style>
</style>
