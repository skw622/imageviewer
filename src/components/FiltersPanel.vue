<template>
  <q-card class="transparent" flat>
    <q-card-section>
      <div class="row items-center no-wrap">
        <q-icon size="sm" name="mdi-tune" />
        <div class="text-h6 q-pl-sm">Filters</div>
        <q-space />
        <q-btn round flat icon="mdi-dots-vertical">
          <q-menu auto-close>
            <q-list>
              <q-item clickable @click="loadFilterPreset()">
                <q-item-section>Load Preset...</q-item-section>
              </q-item>
              <q-item clickable @click="saveFilterPreset()">
                <q-item-section>Save Preset...</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable @click="resetFilters()">
                <q-item-section>Reset Filters</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
    </q-card-section>

    <!-- https://forum.quasar-framework.org/topic/4039/solved-multi-q-select-with-an-array-of-objects/2 -->
    <q-card-section class="q-pt-none">
      <div class="q-gutter-sm">
        <q-select
          stack-label
          rounded
          standout
          option-value="value"
          option-label="label"
          v-model="sortingModel"
          :options="sortingItems"
          label="Sort"
        >
          <template v-slot:prepend>
            <q-icon name="mdi-sort-variant" />
          </template>
        </q-select>

        <q-select
          clearable
          stack-label
          rounded
          standout
          multiple
          use-chips
          input-debounce="0"
          v-model="tagModel"
          label="Tags"
        >
          <template v-slot:prepend>
            <q-icon name="mdi-tag-multiple" />
          </template>
        </q-select>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from '@vue/composition-api';
import { SortingItem } from '../models/models';
import { defaultSortingItems, activeSortingItem } from '../models/defaults';

export default defineComponent({
  name: 'FiltersPanel',
  props: {},

  setup(props, { emit }) {
    const sortingModel: Ref<SortingItem> = ref(activeSortingItem);
    const sortingItems: Ref<SortingItem[]> = ref(defaultSortingItems);
    return {
      sortingModel,
      sortingItems
    };
  }
});
</script>
