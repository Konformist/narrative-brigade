<template>
  <div
    class="scene"
    :style="{ background: currentScene.background }"
  >
    <div class="scene-block">
      <div>
        {{ currentScene.text }}
      </div>
      <div
        v-for="(item, index) in currentScene.actions"
        :key="index"
        class="scene-action"
        @click="onClick(item)"
      >
        {{ item.text }}
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
.scene {
  position: relative;
}

.scene-block {
  font-weight: 600;
  font-size: 14px;
  position: absolute;
  bottom: 8px;
  left: 10vw;
  right: 10vw;
  border: 2px solid #c9c9c9;
  padding: 8px;
  background: #918d8d8c;
}

.scene-action {
  font-size: 12px;
  cursor: pointer;
  margin-top: 8px;
  text-decoration: underline;
}

.scene-action:hover {
  color: aqua;
}

.scene-action:active {
  color: #006464;
}
</style>
