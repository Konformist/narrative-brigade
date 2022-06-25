import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    screen: 'loading',
    scene: 'start',
    player: {
      name: '',
    },
    settings: {
      sound: 50,
    },
  }),
})
