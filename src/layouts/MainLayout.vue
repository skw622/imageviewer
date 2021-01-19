<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-avatar>
          <q-icon size="md" name="mdi-magnify" />
        </q-avatar>
        <q-toolbar-title>
          Browser
        </q-toolbar-title>

        <q-btn
          flat
          round
          dense
          icon="mdi-tune"
          class="q-mx-xs"
          @click="showFilters = !showFilters"
        >
          <q-tooltip :delay="700">Filters</q-tooltip>
        </q-btn>
        <q-separator inset spaced vertical />
        <q-btn
          flat
          round
          dense
          icon="mdi-cog"
          class="q-mx-xs"
          @click="showSettings = true"
        >
          <q-tooltip :delay="700">Settings</q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>

    <!-- The sidebar with Filters -->
    <q-drawer
      v-model="showFilters"
      :width="400"
      :breakpoint="960"
      content-class="bg-grey-10"
    >
      <q-scroll-area class="fit">
        <FiltersPanel />
      </q-scroll-area>

      <div class="absolute" style="top: 25px; right: -12px">
        <q-btn
          dense
          round
          unelevated
          size="sm"
          color="primary"
          icon="chevron_left"
          @click="showFilters = false"
        >
          <q-tooltip :delay="700">Minimize</q-tooltip>
        </q-btn>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-dialog v-model="showSettings">
      <SettingsPanel />
    </q-dialog>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from '@vue/composition-api';
import FiltersPanel from 'src/components/FiltersPanel.vue';
import SettingsPanel from 'src/components/SettingsPanel.vue';

export default defineComponent({
  name: 'MainLayout',
  components: { FiltersPanel, SettingsPanel },
  setup() {
    const showFilters: Ref<boolean> = ref(false);
    const showSettings: Ref<boolean> = ref(false);

    return {
      showFilters,
      showSettings
    };
  }
});
</script>
