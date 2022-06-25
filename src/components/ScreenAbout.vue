<template>
  <div
    class="screen-start nb-flex nb-flex-center"
  >
    <div class="screen-start-menu">
      <div class="screen-start-menu--caption">
        About
      </div>
      <div>
        HELP ME!!! I'M IN JAIL!!!
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
import { mapStores } from 'pinia';
import { useMainStore } from '@/store/index.js';

export default {
  name: 'ScreenAbout',

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
