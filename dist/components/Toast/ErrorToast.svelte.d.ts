import { SvelteComponent } from "svelte";
import type { Toast } from './types.js';
declare const __propDef: {
    props: {
        toast: Toast;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ErrorToastProps = typeof __propDef.props;
export type ErrorToastEvents = typeof __propDef.events;
export type ErrorToastSlots = typeof __propDef.slots;
export default class ErrorToast extends SvelteComponent<ErrorToastProps, ErrorToastEvents, ErrorToastSlots> {
}
export {};
