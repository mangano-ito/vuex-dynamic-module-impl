<template>
  <div class="items">
    <Item v-for="id in ids" :key="id" :id="id" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Item from '@/components/Item.vue';

@Component({
  components: {
    Item,
  },
})
export default class Items extends Vue {
    /** IDs of items */
    private ids = [111, 5555, 3333, 4649];
}
</script>
