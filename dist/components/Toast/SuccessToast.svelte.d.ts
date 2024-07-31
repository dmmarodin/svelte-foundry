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
export type SuccessToastProps = typeof __propDef.props;
export type SuccessToastEvents = typeof __propDef.events;
export type SuccessToastSlots = typeof __propDef.slots;
export default class SuccessToast extends SvelteComponentTyped<SuccessToastProps, SuccessToastEvents, SuccessToastSlots> {
}
export {};
