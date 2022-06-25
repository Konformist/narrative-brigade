<template>
  <div
    class="screen-start nb-flex nb-flex-center"
  >
    <div class="screen-start-menu">
      <div class="screen-start-menu--caption">
        Credits
      </div>
      <div>
        This is credits
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useMainStore } from '@/store/index.js';

export default {
  name: 'ScreenCredits',

  computed: {
    ...mapStores(useMainStore),
  },

  created() {
    setTimeout(() => {
      this.mainStore.scene = 'start';
      this.mainStore.screen = 'start';
    }, 5000);
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
