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
export type CheckIconProps = typeof __propDef.props;
export type CheckIconEvents = typeof __propDef.events;
export type CheckIconSlots = typeof __propDef.slots;
export default class CheckIcon extends SvelteComponentTyped<CheckIconProps, CheckIconEvents, CheckIconSlots> {
}
export {};
