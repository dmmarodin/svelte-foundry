import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        title?: string;
        labelFor?: string;
        disabled?: boolean;
        error?: string;
        horizontal?: boolean;
        class?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type InputGroupProps = typeof __propDef.props;
export type InputGroupEvents = typeof __propDef.events;
export type InputGroupSlots = typeof __propDef.slots;
export default class InputGroup extends SvelteComponentTyped<InputGroupProps, InputGroupEvents, InputGroupSlots> {
}
export {};
