<template>
  <div style="background: antiquewhite; display: flex;">
    <div style="margin: auto;">
      <div>
        <label>
          <div>
            Your name
          </div>
          <input
            v-model="mainStore.player.name"
          />
        </label>
      </div>
      <div>
        <button
          style="width: 100%; margin-top: 4px;"
          @click="mainStore.nextScreen('scene')"
        >
          Start
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useMainStore } from '@/store/index.js';
import { mapStores } from 'pinia';

export default {
  name: 'ScreenStart',

  computed: {
    ...mapStores(useMainStore),
  },
};
</script>

<style scoped>

</style>
