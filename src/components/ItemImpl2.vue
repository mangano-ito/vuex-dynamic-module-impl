<template>
  <div class="item">
    <p>ID: {{ id }}</p>
    <p>Liked: {{ likes }}</p>
    <ul>
      <li><input type="button" value="upvote" @click="upvote(id)" /></li>
      <li><input type="button" value="downvote" @click="downvote(id)" /></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { Actions } from '@/stores/list/action';

const module = namespace('ListStore');

@Component
export default class ItemImpl2 extends Vue {
    /** ID of item */
    @Prop() private id!: number;
    /** the number of likes given */
    @Prop() private likes!: number;

    @module.Action(Actions.UPVOTE) private upvote!: (id: number) => void;
    @module.Action(Actions.DOWNVOTE) private downvote!: (id: number) => void;
}
</script>

<style scoped lang="scss">
  .item {
    border: thin solid #555;
    margin: 1rem;
    padding: 1rem;
    display: inline-block;
  }
</style>
