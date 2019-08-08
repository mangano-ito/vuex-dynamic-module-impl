<template>
  <div class="items">
    <h2>Implementation 2 (Static; Using List Store)</h2>
    <Item
      v-for="item of Object.values(items)"
      :key="item.id"
      :id="item.id"
      :likes="item.likes" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import Item from '@/components/ItemImpl2.vue';
import { Actions } from '@/stores/list/action';

const module = namespace('ListStore');

@Component({
  components: {
    Item,
  },
})
export default class ItemsImpl2 extends Vue {
    /** IDs of items */
    private ids = [111, 5555, 3333, 4649];

    @module.State items!: {};
    @module.Action(Actions.INIT) init!: (ids: number[]) => void;

    created() {
        this.init(this.ids);
    }
}
</script>
