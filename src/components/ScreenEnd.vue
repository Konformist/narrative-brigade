<template>
  <div style="background: #dc4949; display: flex;">
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
};
</script>

<style scoped>

</style>
