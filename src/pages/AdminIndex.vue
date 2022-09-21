<template>
  <h1>Admin Index</h1>
  <ExampleComponent title="a" :meta="{ totalCount: 0 }"></ExampleComponent>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ExampleComponent from 'components/ExampleComponent.vue';

export default defineComponent({
  components: {
    ExampleComponent,
  },
});
</script>
