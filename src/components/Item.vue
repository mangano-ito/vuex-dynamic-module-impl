<template>
  <div class="item">
    <p>ID: {{ id }}</p>
    <p>Liked: {{ likes }}</p>
    <ul>
      <li><input type="button" value="upvote" @click="upvote()" /></li>
      <li><input type="button" value="downvote" @click="downvote()" /></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import DynamicModule from '@/helper/dynamic_module';
import Store from '@/stores/item/store';
import State from '@/stores/item/state';
import { Mutation } from '@/stores/item/mutation';
import { Getters } from '@/stores/item/getter';
import { Actions } from '@/stores/item/action';

@Component
export default class ItemComponent extends Vue {
    /** ID of item */
    @Prop() private id!: number;
    /** module of the item */
    private module!: DynamicModule<State, any>;

    /**
     * The number of likes given
     */
    public get likes(): number {
        return this.module.state.likes;
    }

    /**
     * Upvote item
     */
    public upvote() {
        return this.module.action(Actions.UPVOTE);
    }

    /**
     * Downvote item
     */
    public downvote() {
        return this.module.action(Actions.DOWNVOTE);
    }

    protected created() {
        const namespace = `items/${this.id}`;
        this.module = new DynamicModule(this, namespace, Store);
        this.module.action(Actions.INIT, this.id);
    }

    protected destroyed() {
        this.module.detach();
    }
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
