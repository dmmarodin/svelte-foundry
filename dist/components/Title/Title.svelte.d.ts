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
export type TitleProps = typeof __propDef.props;
export type TitleEvents = typeof __propDef.events;
export type TitleSlots = typeof __propDef.slots;
export default class Title extends SvelteComponentTyped<TitleProps, TitleEvents, TitleSlots> {
}
export {};
