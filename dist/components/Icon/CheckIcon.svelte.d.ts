import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        class?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type CheckIconProps = typeof __propDef.props;
export type CheckIconEvents = typeof __propDef.events;
export type CheckIconSlots = typeof __propDef.slots;
export default class CheckIcon extends SvelteComponent<CheckIconProps, CheckIconEvents, CheckIconSlots> {
}
export {};
