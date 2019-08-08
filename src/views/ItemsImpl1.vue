<template>
  <div class="items">
    <h2>Implementation 1 (Dynamic; Using Item Store)</h2>
    <Item v-for="id in ids" :key="id" :id="id" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Item from '@/components/ItemImpl1.vue';

@Component({
  components: {
    Item,
  },
})
export default class ItemsImpl1 extends Vue {
    /** IDs of items */
    private ids = [111, 5555, 3333, 4649];
}
</script>
