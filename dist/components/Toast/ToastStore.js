import { writable } from 'svelte/store';
class ToastStore {
    store = writable({});
    subscribe = this.store.subscribe;
    push(toast) {
        this.store.update((s) => ({ ...s, [toast.id]: toast }));
    }
    delete(id) {
        this.store.update((s) => {
            const tmp = { ...s };
            if (Object.keys(tmp).includes(id)) {
                delete tmp[id];
            }
            return tmp;
        });
    }
}
export const toastStore = new ToastStore();
