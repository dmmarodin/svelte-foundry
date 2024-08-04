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
export type ErrorIconProps = typeof __propDef.props;
export type ErrorIconEvents = typeof __propDef.events;
export type ErrorIconSlots = typeof __propDef.slots;
export default class ErrorIcon extends SvelteComponent<ErrorIconProps, ErrorIconEvents, ErrorIconSlots> {
}
export {};
