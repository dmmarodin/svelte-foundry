import { SvelteComponent } from "svelte";
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
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type TitleProps = typeof __propDef.props;
export type TitleEvents = typeof __propDef.events;
export type TitleSlots = typeof __propDef.slots;
export default class Title extends SvelteComponent<TitleProps, TitleEvents, TitleSlots> {
}
export {};
