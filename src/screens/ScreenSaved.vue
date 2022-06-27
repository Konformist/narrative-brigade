<template>
  <div
    class="screen-start nb-flex nb-flex-center"
  >
    <div class="screen-start-menu">
      <div class="screen-start-menu--caption">
        Load game
      </div>
      <div class="list">
        <div
          v-for="(game, index) in mainStore.saveGames"
          :key="index"
          class="nb-flex nb-mt-4"
          @click.self="mainStore.loadGame(index)"
        >
          <div
            @click="mainStore.loadGame(index)"
          >
            {{ index + 1 }}.
          </div>
          <div
            style="flex-grow: 1; padding: 0 4px;"
            @click="mainStore.loadGame(index)"
          >
            {{ game.title }}
          </div>
          <button
            @click="mainStore.deleteGame(index)"
          >
            x
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
  name: 'ScreenSaved',

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
