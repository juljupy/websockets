<template>
  <div>
    <h3 class="text-lg leading-6 font-medium text-gray-900 bg-gray-100 px-4 py-2">
      Messages from <span class="font-bold">{{ channel }}</span>
    </h3>
    <div class="p-4">
      <ul>
        <li
          v-for="(item, index) in messages"
          :key="index"
          class="border rounded-md shadow-sm m-2 p-4"
        >
          {{ item.message }}
        </li>
      </ul>
      <div
        v-if="channel !== ''"
        class="flex space-x-2"
      >
        <input
          v-model="message"
          class="bg-gray-100 text-gray-400 rounded-md px-4 py-2 border border-gray-300 ring-0 flex-1"
        >
        <button
          type="button"
          class="rounded-md bg-indigo-600 text-white px-4 py-2"
          @click="sendMessage"
        >
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import axios from 'axios'

interface Message {
  info: string;
  message: string;
}

export default defineComponent({
  props: {
    channel: {
      type: String,
      default: 'no channel selected',
    },
  },

  setup() {
    return {
      messages: ref<Message[]>([]),
      message: ref(''),
    }
  },

  watch: {
    channel: {
      handler(val: string) {
        if (val !== '') {
          this.$echo.channel(this.channel)
            .listen('.NewMessage', async (data: Message) => {
              return this.messages.push(data)
            })
        }
      },
    },
  },

  methods: {
    sendMessage() {
      if (this.message !== '') {
        axios.post('http://localhost:81/api/notify-to-all', {
          message: this.message,
        })
        .then(() => this.message = '')
      }
    },
  },
})
</script>

<style>
</style>
