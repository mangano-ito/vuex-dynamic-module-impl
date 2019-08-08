import { ActionContext, MutationTree, ActionTree } from 'vuex';
import Item from '@/models/Item';
import State from './state';
import { Mutation } from './mutation';
import { Actions } from './action';


const createState = (): State => ({
    id: 0,
    likes: 0,
});

const mutations: MutationTree<State> = {
    [Mutation.INIT](state: State, item: Item) {
        state.id = item.id;
        state.likes = item.likes;
    },

    [Mutation.INCREMENT_BY](state: State, amount: number) {
        state.likes += amount;
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
    async [Actions.INIT](context: Context, id: number) {
        const data = await fetchDataById(id);
        context.commit(Mutation.INIT, data);
    },

    [Actions.UPVOTE](context: Context) {
        context.commit(Mutation.INCREMENT_BY, +1);
    },

    [Actions.DOWNVOTE](context: Context) {
        context.commit(Mutation.INCREMENT_BY, -1);
    },
};

export default {
  state: createState,
  mutations,
  actions,
  namespaced: true,
};
