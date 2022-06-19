import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    screen: 'start',
    scene: 'start',
    player: {
      name: '',
    },
  }),

  actions: {
    nextScreen(name = 'start') {
      this.screen = name;
    }
  },
})
