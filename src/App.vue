<template>
  <ScreenLoading
    v-if="mainStore.screen === 'loading'"
  />
  <ScreenStart
    v-else-if="mainStore.screen === 'start'"
  />
  <ScreenSettings
    v-else-if="mainStore.screen === 'settings'"
  />
  <ScreenSaved
    v-else-if="mainStore.screen === 'saved'"
  />
  <ScreenSave
    v-else-if="mainStore.screen === 'save'"
  />
  <ScreenHelp
    v-else-if="mainStore.screen === 'help'"
  />
  <ScreenAbout
    v-else-if="mainStore.screen === 'about'"
  />
  <ScreenSpecials
    v-else-if="mainStore.screen === 'specials'"
  />
  <ScreenScene
    v-else-if="mainStore.screen === 'scene'"
  />
  <ScreenCredits
    v-else-if="mainStore.screen === 'credits'"
  />
</template>

<script>
import ScreenAbout from '@/components/ScreenAbout.vue';
import ScreenCredits from '@/components/ScreenCredits.vue';
import ScreenHelp from '@/components/ScreenHelp.vue';
import ScreenSpecials from '@/components/ScreenSpecials.vue';
import { mapStores } from 'pinia';
import { useMainStore } from '@/store/index.js';
import ScreenSave from '@/components/ScreenSave.vue';
import ScreenSaved from '@/components/ScreenSaved.vue';
import ScreenSettings from '@/components/ScreenSettings.vue';
import ScreenLoading from '@/components/ScreenLoading.vue';
import ScreenScene from '@/components/ScreenScene.vue';
import ScreenStart from '@/components/ScreenStart.vue';

export default {
  name: 'App',
  components: {
    ScreenCredits,
    ScreenSpecials,
    ScreenAbout,
    ScreenHelp,
    ScreenSave,
    ScreenSaved,
    ScreenSettings,
    ScreenLoading,
    ScreenScene,
    ScreenStart,
  },

  computed: {
    ...mapStores(useMainStore),
  },
  
  created() {
    setTimeout(() => {
      this.mainStore.screen = 'start';
    }, 1000);
  },
}
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
}
</style>
