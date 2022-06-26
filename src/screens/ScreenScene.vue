<template>
  <div
    class="screen-scene"
    :class="position"
  >
    <button
      class="screen-scene-buttons screen-scene-buttons--inventory"
      @click="modalInventory = true"
    >
      i
    </button>
    <button
      class="screen-scene-buttons screen-scene-buttons--menu"
      @click="modalMenu = true"
    >
      <span>
        <span />
        <span />
        <span />
      </span>
    </button>
    <div
      class="screen-scene-image"
    />
    <!--    :style="{ background: currentScene.background }"-->
    <div class="screen-scene-block">
      <div>
        {{ currentScene.text }}
      </div>
      <div
        v-for="(item, index) in currentScene.actions"
        :key="index"
        class="screen-scene-action"
        @click="onClick(item)"
      >
        {{ item.text }}
      </div>
    </div>
    <ModalMenu
      v-if="modalMenu"
      @close="modalMenu = false"
    />
    <ModalInventory
      v-if="modalInventory"
      @close="modalInventory = false"
    />
    <ModalScene
      v-if="modalScene"
      @close="modalScene = false"
    />
  </div>
</template>

<script>
import ModalInventory from '@/components/ModalInventory.vue';
import ModalMenu from '@/components/ModalMenu.vue';
import ModalScene from '@/components/ModalScene.vue';
import { mapStores } from 'pinia';
import { useMainStore } from '@/store/index.js';
import scenes from '@/scenes/index.js';

export default {
  name: 'ScreenScene',
  components: { ModalScene, ModalInventory, ModalMenu },
  data() {
    return {
      modalMenu: false,
      modalInventory: false,
      modalScene: false,
      microScene: null,
    }
  },
  computed: {
    ...mapStores(useMainStore),

    currentScene() {
      return scenes[this.mainStore.scene];
    },

    currentMicroScene() {
      return scenes[this.microScene];
    },

    position() {
      return `screen-scene-position-${this.currentScene.position}`;
    },
  },
  
  methods: {
    onClick(item) {
      if ('scene' in item) {
        this.mainStore.scene = item.scene;
      }

      if ('screen' in item) {
        this.mainStore.screen = item.screen;
      }

      if ('microScene' in item) {
        this.microScene = item.microScene;
        this.modalScene = true;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
$component: screen-scene;

.#{$component} {
  width: 100%;
  height: 100%;
  position: relative;
  
  &-position-1 {
    .#{$component}-image {
      top: 54px;
      left: 16px;
      right: 16px;
      bottom: calc(50% - 16px);
    }

    .#{$component}-block {
      top: calc(50% + 32px);
      bottom: 16px;
      left: 16px;
      right: 16px;
    }
  }

  &-position-2 {
    .#{$component}-image {
      top: 54px;
      bottom: 16px;
      left: calc(50% + 8px);
      right: 16px;
    }

    .#{$component}-block {
      top: 54px;
      bottom: 16px;
      left: 16px;
      right: calc(50% + 8px);
    }
  }

  &-position-3 {
    .#{$component}-image {
      top: calc(50% + 32px);
      bottom: 16px;
      left: 16px;
      right: 16px;
    }

    .#{$component}-block {
      top: 54px;
      left: 16px;
      right: 16px;
      bottom: calc(50% - 16px);
    }
  }

  &-position-4 {
    .#{$component}-image {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    .#{$component}-block {
      left: 16px;
      right: 16px;
      bottom: 16px;
    }
  }

  &-position-5 {
    .#{$component}-image {
      display: none;
    }

    .#{$component}-block {
      top: 54px;
      left: 16px;
      right: 16px;
      bottom: 16px;
    }
  }

  &-buttons {
    position: absolute;
    top: 16px;
    z-index: 5;

    &--inventory {
      left: 16px;
    }

    &--menu {
      right: 16px;
      
      &:active > span > span {
        border-top-color: #000;
      }
      
      > span > span {
        display: block;
        width: 8px;
        border-top: 1px solid #18e800;
        
        &:not(:first-child) {
          margin-top: 2px;
        }
      }
    }
  }

  &-image {
    position: absolute;
    //background-repeat: no-repeat;
    //background-size: contain;
    background-size: 80px 80px;
    //background-position: center;
    background-image:
      linear-gradient(45deg, rgba(0, 0, 0, 0) 49.9%, #18e800 49.9%, #18e800 50%, rgba(0, 0, 0, 0) 51%),
      linear-gradient(45deg, #18e800 0%, rgba(0, 0, 0, 0) 1%);
    border: 2px solid #18e800;
  }

  &-block {
    font-size: 14px;
    position: absolute;
    border: 2px solid #18e800;
    padding: 8px;
    background: #000;
  }

  &-action {
    font-weight: 600;
    cursor: pointer;
    margin-top: 8px;
    text-decoration: underline;

    &:hover { color: aqua; }
    &:active { color: #006464; }
  }
}
</style>
