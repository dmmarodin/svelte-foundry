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
export type WarningToastProps = typeof __propDef.props;
export type WarningToastEvents = typeof __propDef.events;
export type WarningToastSlots = typeof __propDef.slots;
export default class WarningToast extends SvelteComponent<WarningToastProps, WarningToastEvents, WarningToastSlots> {
}
export {};
