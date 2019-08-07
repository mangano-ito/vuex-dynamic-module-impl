import { Vue } from 'vue/types/vue';
import { Module } from 'vuex';

export default class DynamicModule<T, R> {
    constructor(
        private instance: Vue,
        private namespace: string,
        private module: Module<T, R>,
    ) {
        this.attach();
    }

    public attach() {
        this.instance.$store.registerModule(this.namespace, this.module);
    }

    public detach() {
        this.instance.$store.unregisterModule(this.namespace);
    }

    public action<ActionType>(action: ActionType, payload?: any): any {
        return this.instance.$store.dispatch(`${this.namespace}/${action}`, payload, {root: true});
    }

    public getter<GetterType>(getter: GetterType): any {
        return this.instance.$store.getters[`${this.namespace}/${getter}`];
    }
}
