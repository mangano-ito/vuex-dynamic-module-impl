import Vue from 'vue';
import { ActionContext, MutationTree, ActionTree } from 'vuex';
import Item from '@/models/Item';
import State from './state';
import { Mutation } from './mutation';
import { Actions } from './action';


const state: State = {
    items: {},
};

const mutations: MutationTree<State> = {
    [Mutation.INIT](state: State, items: Item[]) {
        for (const item of items) {
            Vue.set(state.items, item.id, item);
        }
    },

    [Mutation.INCREMENT_BY](state: State, payload: { amount: number, id: number }) {
        const item = state.items[payload.id];
        if (item) {
            item.likes += payload.amount;
        }
    },
};

/**
 * アイテムの取得 (非同期想定)
 * @param id 取得するアイテムの ID
 */
const fetchDataById = (id: number) => new Promise((resolve, _) => {
    const data: Item = {
        id,
        likes: id * 10,
    };
    window.setTimeout(() => resolve(data), 1000);
});

type Context = ActionContext<State, any>;
const actions: ActionTree<State, any> = {
    async [Actions.INIT](context: Context, ids: number[]) {
        const promises = ids.map((id) => fetchDataById(id));
        const items = await Promise.all(promises);
        context.commit(Mutation.INIT, items);
    },

    [Actions.UPVOTE](context: Context, id: number) {
        context.commit(Mutation.INCREMENT_BY, { amount: +1, id });
    },

    [Actions.DOWNVOTE](context: Context, id: number) {
        context.commit(Mutation.INCREMENT_BY, { amount: -1, id });
    },
};

export default {
  state,
  mutations,
  actions,
  namespaced: true,
};
