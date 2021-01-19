<template>
  <q-card dark class="bg-grey-10" style="width:50vw; max-width: 80vw;">
    <q-toolbar>
      <q-avatar>
        <q-icon size="md" name="mdi-cog" />
      </q-avatar>

      <q-toolbar-title>Settings</q-toolbar-title>

      <q-btn flat round dense icon="close" v-close-popup />
    </q-toolbar>

    <q-list padding>
      <q-item-label header>General</q-item-label>

      <q-item>
        <q-item-section>
          <q-select
            stack-label
            rounded
            standout
            label="Database"
            v-model="databaseModel"
            :options="databaseItems"
            :hint="`${databaseModel ? databaseModel.client_url : ''}`"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-database" />
            </template>
          </q-select>
        </q-item-section>
      </q-item>

      <q-separator spaced />
      <q-item-label header>Media</q-item-label>

      <q-item>
        <q-item-section side>
          <q-icon name="mdi-image-size-select-large">
            <q-tooltip :delay="700">Thumbnail Size</q-tooltip>
          </q-icon>
        </q-item-section>
        <q-item-section>
          <q-slider
            label
            label-always
            v-model="mediaThumbnailSize"
            :min="180"
            :max="640"
            :step="1"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from '@vue/composition-api';
import { DatabaseItem } from '../models/models';
import { defaultDatabaseItems, activeDatabaseItem } from '../models/defaults';

export default defineComponent({
  name: 'Settings',

  props: {},

  setup(props, { emit }) {
    const databaseModel: Ref<DatabaseItem> = ref(activeDatabaseItem);
    const databaseItems: Ref<DatabaseItem[]> = ref(defaultDatabaseItems);
    const mediaThumbnailSize: Ref<number> = ref(320);

    return {
      databaseModel,
      databaseItems,
      mediaThumbnailSize
    };
  }
});
</script>
