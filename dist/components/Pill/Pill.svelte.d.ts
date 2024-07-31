import { SvelteComponentTyped } from "svelte";
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
};
export type PillProps = typeof __propDef.props;
export type PillEvents = typeof __propDef.events;
export type PillSlots = typeof __propDef.slots;
export default class Pill extends SvelteComponentTyped<PillProps, PillEvents, PillSlots> {
}
export {};
