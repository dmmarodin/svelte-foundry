import { SvelteComponentTyped } from "svelte";
import type { Toast } from './types.js';
declare const __propDef: {
    props: {
        toast: Toast;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PromiseToastProps = typeof __propDef.props;
export type PromiseToastEvents = typeof __propDef.events;
export type PromiseToastSlots = typeof __propDef.slots;
export default class PromiseToast extends SvelteComponentTyped<PromiseToastProps, PromiseToastEvents, PromiseToastSlots> {
}
export {};
