<template>
  <div
    class="screen-start nb-flex nb-flex-center"
  >
    <div
      class="screen-start-name"
      style="margin-bottom: 40px"
    >
      Narrative Brigade
    </div>
    <div class="screen-start-menu">
      <div class="screen-start-menu--caption">
        Menu
      </div>
      <button
        class="nb-wp-100"
        @click="mainStore.screen = 'scene'"
      >
        {{ mainStore.saveGames.length ? 'Continue' : 'Start' }}
      </button>
      <button
        class="nb-wp-100 nb-mt-4"
        @click="mainStore.screen = 'saved'"
      >
        Load
      </button>
      <button
        class="nb-wp-100 nb-mt-4"
        @click="mainStore.screen = 'settings'"
      >
        Settings
      </button>
      <button
        class="nb-wp-100 nb-mt-4"
        @click="mainStore.screen = 'help'"
      >
        Help
      </button>
      <button
        class="nb-wp-100 nb-mt-4"
        @click="mainStore.screen = 'about'"
      >
        About
      </button>
      <button
        class="nb-wp-100 nb-mt-4"
        @click="mainStore.screen = 'specials'"
      >
        Specials
      </button>
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
