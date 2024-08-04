import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ModalTitleProps = typeof __propDef.props;
export type ModalTitleEvents = typeof __propDef.events;
export type ModalTitleSlots = typeof __propDef.slots;
export default class ModalTitle extends SvelteComponent<ModalTitleProps, ModalTitleEvents, ModalTitleSlots> {
}
export {};
