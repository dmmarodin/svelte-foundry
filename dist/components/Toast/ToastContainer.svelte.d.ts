import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ToastContainerProps = typeof __propDef.props;
export type ToastContainerEvents = typeof __propDef.events;
export type ToastContainerSlots = typeof __propDef.slots;
export default class ToastContainer extends SvelteComponentTyped<ToastContainerProps, ToastContainerEvents, ToastContainerSlots> {
}
export {};
