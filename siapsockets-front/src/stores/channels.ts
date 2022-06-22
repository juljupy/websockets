import { defineStore } from 'pinia'


export const useChannelStore = defineStore('channels', {

    state: () => ({
        selectedChannel: '',
    }),

    actions: {
        setChannel( channel: string ) {
          this.selectedChannel = channel
        },
    },
})

