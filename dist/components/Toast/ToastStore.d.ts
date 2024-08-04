import { type Writable } from 'svelte/store';
import type { Toast, ToastDict } from './types.js';
declare class ToastStore {
    store: Writable<ToastDict>;
    subscribe: (this: void, run: import("svelte/store").Subscriber<ToastDict>, invalidate?: import("svelte/store").Invalidator<ToastDict> | undefined) => import("svelte/store").Unsubscriber;
    push(toast: Toast): void;
    delete(id: string): void;
}
export declare const toastStore: ToastStore;
export {};
