<template>
  <div style="background: #a016e8; display: flex;">
    <div style="margin: auto">
      THE END
    </div>
  </div>
</template>

<script>
import { useMainStore } from '@/store/index.js';
import { mapStores } from 'pinia';

export default {
  name: 'ScreenEnd',

  computed: {
    ...mapStores(useMainStore),
  },
  
  created() {
    this.mainStore.scene = 'start';
  },
};
</script>

<style scoped>

</style>
