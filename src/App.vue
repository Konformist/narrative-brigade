<template>
  <div>
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}
</style>
