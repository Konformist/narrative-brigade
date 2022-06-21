<template>
  <div style="padding: 4px; background: #c9c9c9">
    <button @click="mainStore.nextScreen()">
      To start
    </button>
  </div>
  <ScreenStart
    v-if="mainStore.screen === 'start'"
    style="flex-grow: 1"
  />
  <ScreenScene
    v-else-if="mainStore.screen === 'scene'"
    style="flex-grow: 1"
  />
  <ScreenEnd
    v-else-if="mainStore.screen === 'end'"
    style="flex-grow: 1"
  />
</template>

<script>
import { mapStores } from 'pinia';
import { useMainStore } from '@/store/index.js';
import ScreenEnd from '@/components/ScreenEnd.vue';
import ScreenScene from '@/components/ScreenScene.vue';
import ScreenStart from '@/components/ScreenStart.vue';

export default {
  name: 'App',
  components: {
    ScreenEnd,
    ScreenScene,
    ScreenStart,
  },

  computed: {
    ...mapStores(useMainStore),
  },
}
</script>

<style>
#app {
  font-family: Consolas;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}

button,
input {
  font-family: Consolas;
  font-size: 14px;
}

button {
  font-weight: 600;
}
</style>
