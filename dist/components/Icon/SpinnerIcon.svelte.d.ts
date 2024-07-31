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
export type SpinnerIconProps = typeof __propDef.props;
export type SpinnerIconEvents = typeof __propDef.events;
export type SpinnerIconSlots = typeof __propDef.slots;
export default class SpinnerIcon extends SvelteComponentTyped<SpinnerIconProps, SpinnerIconEvents, SpinnerIconSlots> {
}
export {};
