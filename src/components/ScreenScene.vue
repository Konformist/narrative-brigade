<template>
  <div
    style="display: flex;"
    :style="{ background: currentScene.background }"
  >
    <div style="margin: auto auto 0; width: 80vw;">
      <div>
        {{ currentScene.text }}
      </div>
      <div
        v-for="(item, index) in currentScene.actions"
        :key="index"
      >
        <button @click="onClick(item)">
          {{ item.text }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useMainStore } from '@/store/index.js';
import scenes from '@/scenes/index.js';

export default {
  name: 'ScreenScene',

  computed: {
    ...mapStores(useMainStore),

    currentScene() {
      return scenes[this.mainStore.scene];
    }
  },
  
  methods: {
    onClick(item) {
      if ('scene' in item) {
        this.mainStore.scene = item.scene;
      }

      if ('screen' in item) {
        this.mainStore.screen = item.screen;
      }
    }
  },
};
</script>

<style scoped>

</style>
