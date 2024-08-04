import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        class?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type PillProps = typeof __propDef.props;
export type PillEvents = typeof __propDef.events;
export type PillSlots = typeof __propDef.slots;
export default class Pill extends SvelteComponent<PillProps, PillEvents, PillSlots> {
}
export {};
