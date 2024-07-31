import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        label: string;
        isDefault?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type TabProps = typeof __propDef.props;
export type TabEvents = typeof __propDef.events;
export type TabSlots = typeof __propDef.slots;
export default class Tab extends SvelteComponentTyped<TabProps, TabEvents, TabSlots> {
}
export {};
