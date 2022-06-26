<template>
  <NbModal
    caption="Menu"
    @close="$emit('close')"
  >
    <div style="width: 250px; padding: 16px;">
      <button
        class="nb-wp-100"
        @click="$emit('close')"
      >
        Continue
      </button>
      <button
        class="nb-wp-100 nb-mt-4"
        @click="mainStore.screen = 'saved'"
      >
        Load
      </button>
      <button
        class="nb-wp-100 nb-mt-4"
        @click="mainStore.screen = 'save'"
      >
        Save
      </button>
      <button
        class="nb-wp-100 nb-mt-4"
        @click="mainStore.screen = 'help'"
      >
        Help
      </button>
      <button
        class="nb-wp-100 nb-mt-4"
        @click="mainStore.screen = 'settings'"
      >
        Settings
      </button>
      <button
        class="nb-wp-100 nb-mt-4"
        @click="mainStore.screen = 'start'"
      >
        General menu
      </button>
    </div>
  </NbModal>
</template>

<script>
import NbModal from '@/components/NbModal.vue';
import { useMainStore } from '@/store/index.js';
import { mapStores } from 'pinia';

export default {
  name: 'ModalMenu',
  components: { NbModal },
  
  computed: {
    ...mapStores(useMainStore),
  }
};
</script>
