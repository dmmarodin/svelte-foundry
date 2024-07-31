import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        id?: string;
        value?: string;
        title: string;
        error?: string;
        disabled?: boolean;
        nullable?: boolean;
        horizontal?: boolean;
        required?: boolean;
        requiredText?: string;
        class?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SelectProps = typeof __propDef.props;
export type SelectEvents = typeof __propDef.events;
export type SelectSlots = typeof __propDef.slots;
export default class Select extends SvelteComponentTyped<SelectProps, SelectEvents, SelectSlots> {
}
export {};
