import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string;
        value?: string;
        id?: string;
        title?: string;
        placeholder?: string;
        disabled?: boolean;
        error?: string;
        horizontal?: boolean;
        required?: boolean;
        requiredText?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type InputProps = typeof __propDef.props;
export type InputEvents = typeof __propDef.events;
export type InputSlots = typeof __propDef.slots;
export default class Input extends SvelteComponentTyped<InputProps, InputEvents, InputSlots> {
}
export {};
