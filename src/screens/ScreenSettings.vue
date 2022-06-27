<template>
  <div
    class="screen-start nb-flex nb-flex-center"
  >
    <div class="screen-start-menu">
      <div class="screen-start-menu--caption">
        Settings
      </div>
      <div>
        Sound
      </div>
      <div class="nb-flex nb-mt-4">
        <button
          @click="downSound()"
        >
          -
        </button>
        <input
          style="flex-grow: 1;"
          type="range"
          :max="100"
          :min="0"
          :step="1"
          v-model.number="mainStore.settings.sound"
          @change="mainStore.saveSettings()"
        />
        <button
          @click="upSound()"
        >
          +
        </button>
      </div>
      <button
        class="nb-wp-100 nb-mt-4"
        @click="mainStore.resetSettings()"
      >
        Reset game
      </button>
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
  name: 'ScreenSettings',

  computed: {
    ...mapStores(useMainStore),
  },

  methods: {
    upSound() {
      this.mainStore.settings.sound = this.normalize(this.mainStore.settings.sound + 5, 100, 0);
      this.mainStore.saveSettings();
    },

    downSound() {
      this.mainStore.settings.sound = this.normalize(this.mainStore.settings.sound - 5, 100, 0);
      this.mainStore.saveSettings();
    },

    normalize(value, max, min) {
      return value > max ? max : value < min ? min : value;
    },
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
