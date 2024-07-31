import { SvelteComponentTyped } from "svelte";
import { Toast } from './types.js';
declare const __propDef: {
    props: {
        item: Toast;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ToastItemProps = typeof __propDef.props;
export type ToastItemEvents = typeof __propDef.events;
export type ToastItemSlots = typeof __propDef.slots;
export default class ToastItem extends SvelteComponentTyped<ToastItemProps, ToastItemEvents, ToastItemSlots> {
}
export {};
