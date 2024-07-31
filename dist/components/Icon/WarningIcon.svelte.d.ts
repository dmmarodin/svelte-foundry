import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type WarningIconProps = typeof __propDef.props;
export type WarningIconEvents = typeof __propDef.events;
export type WarningIconSlots = typeof __propDef.slots;
export default class WarningIcon extends SvelteComponentTyped<WarningIconProps, WarningIconEvents, WarningIconSlots> {
}
export {};
