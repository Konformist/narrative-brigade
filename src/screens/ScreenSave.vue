<template>
  <div
    class="screen-start nb-flex nb-flex-center"
  >
    <div class="screen-start-menu">
      <div class="screen-start-menu--caption">
        Save game
      </div>
      <button
        class="nb-wp-100"
        @click="mainStore.saveGame()"
      >
        New save
      </button>
      <div class="list nb-mt-4">
        <div
          v-for="(game, index) in mainStore.saveGames"
          :key="index"
          class="nb-flex"
        >
          <div>
            {{ index + 1 }}.
          </div>
          <div style="flex-grow: 1; padding: 0 4px;">
            {{ game.title }}
          </div>
          <button
            @click="mainStore.saveGame(index)"
          >
            Save
          </button>
        </div>
      </div>
      <button
        class="nb-wp-100 nb-mt-4"
        @click="mainStore.screen = 'start'"
      >
        Back
      </button>
    </div>
  </div>
</template>

<script>
import { useMainStore } from '@/store/index.js';
import { mapStores } from 'pinia';

export default {
  name: 'ScreenSave',

  computed: {
    ...mapStores(useMainStore),
  },
};
</script>

<style lang="scss" scoped>
.screen-start {
  flex-direction: column;
  width: 100%;
  height: 100%;

  &-name {
    font-size: 24px;
    text-transform: uppercase;
  }

  &-menu {
    width: 250px;

    &--caption {
      margin-bottom: 16px;
      text-transform: uppercase;
      text-align: center;
    }
  }
}
</style>
