<template>
  <q-page class="row items-center justify-evenly">
    <div class="row items-top justify-evenly">
      <div class="col">
        <p>Active Database</p>
        <q-badge color="secondary" multi-line>
          Database: "NA"
        </q-badge>
        <br />
        <q-badge color="secondary" multi-line>
          Collections: "NA"
        </q-badge>
        <br />
        <q-badge color="secondary" multi-line>
          Types: "NA"
        </q-badge>
        <br />
        <q-badge color="secondary" multi-line>
          Tags: "NA"
        </q-badge>
        <br />
        <br />
        <p>Other</p>
        <q-badge color="red" multi-line>
          Thumbnail Size: "NA"
        </q-badge>
        <br />
        <q-badge color="red" multi-line>
          Sorting: "NA"
        </q-badge>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import FiltersPanel from 'components/FiltersPanel.vue';
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'PageIndex',
  components: {
    FiltersPanel
  },
  setup() {
    return {};
  }
});
</script>
