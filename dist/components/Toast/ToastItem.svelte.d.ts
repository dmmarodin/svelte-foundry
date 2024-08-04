import { SvelteComponent } from "svelte";
import { Toast } from './types.js';
declare const __propDef: {
    props: {
        item: Toast;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ToastItemProps = typeof __propDef.props;
export type ToastItemEvents = typeof __propDef.events;
export type ToastItemSlots = typeof __propDef.slots;
export default class ToastItem extends SvelteComponent<ToastItemProps, ToastItemEvents, ToastItemSlots> {
}
export {};
