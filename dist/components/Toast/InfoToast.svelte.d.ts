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
export type InfoToastProps = typeof __propDef.props;
export type InfoToastEvents = typeof __propDef.events;
export type InfoToastSlots = typeof __propDef.slots;
export default class InfoToast extends SvelteComponent<InfoToastProps, InfoToastEvents, InfoToastSlots> {
}
export {};
