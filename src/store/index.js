import { defineStore } from 'pinia';

const LOAD_STORE = 'NB_LOAD_STORE';
const SETTINGS_STORE = 'NB_SETTINGS_STORE';

export const useMainStore = defineStore('main', {
  state: () => ({
    screen: 'loading',
    scene: 'start',
    saveGames: [],
    player: {
      name: '',
    },
    settings: {
      sound: 50,
    },
  }),

  actions: {
    loadSettings() {
      const result = localStorage.getItem(SETTINGS_STORE);

      if (result) {
        this.settings = JSON.parse(result);
      }
    },

    saveSettings() {
      localStorage.setItem(SETTINGS_STORE, JSON.stringify(this.settings));
    },

    resetSettings() {
      this.settings.sound = 50;
      localStorage.setItem(SETTINGS_STORE, JSON.stringify(this.settings));
    },

    loadSaves() {
      const result = localStorage.getItem(LOAD_STORE);

      if (result) {
        this.saveGames = JSON.parse(result);
      }

      const last = this.saveGames.reduce((acc, cur) => (
        !acc || acc.lastModify < cur.lastModify ? cur : acc
      ), null);

      if (last) {
        this.scene = last.data.scene;
      }
    },

    loadGame(index) {
      if (index !== undefined) {
        const game = this.saveGames[index];

        this.screen = 'scene';
        this.scene = game.data.scene;
      }
    },

    saveGame(index) {
      const data = {
        title: this.scene,
        lastModify: (new Date()).getTime(),
        data: {
          scene: this.scene,
        }
      }

      if (index === undefined) {
        this.saveGames.push(data);
      } else {
        this.saveGames.splice(index, 1, data);
      }

      localStorage.setItem(LOAD_STORE, JSON.stringify(this.saveGames));
    },

    deleteGame(index) {
      if (index !== undefined) {
        this.saveGames.splice(index, 1);
        localStorage.setItem(LOAD_STORE, JSON.stringify(this.saveGames));
      }
    },
  },
})
