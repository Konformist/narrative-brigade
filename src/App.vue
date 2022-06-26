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
import ScreenAbout from '@/screens/ScreenAbout.vue';
import ScreenCredits from '@/screens/ScreenCredits.vue';
import ScreenHelp from '@/screens/ScreenHelp.vue';
import ScreenSpecials from '@/screens/ScreenSpecials.vue';
import { mapStores } from 'pinia';
import { useMainStore } from '@/store/index.js';
import ScreenSave from '@/screens/ScreenSave.vue';
import ScreenSaved from '@/screens/ScreenSaved.vue';
import ScreenSettings from '@/screens/ScreenSettings.vue';
import ScreenLoading from '@/screens/ScreenLoading.vue';
import ScreenScene from '@/screens/ScreenScene.vue';
import ScreenStart from '@/screens/ScreenStart.vue';

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
