import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ToastContainerProps = typeof __propDef.props;
export type ToastContainerEvents = typeof __propDef.events;
export type ToastContainerSlots = typeof __propDef.slots;
export default class ToastContainer extends SvelteComponent<ToastContainerProps, ToastContainerEvents, ToastContainerSlots> {
}
export {};
