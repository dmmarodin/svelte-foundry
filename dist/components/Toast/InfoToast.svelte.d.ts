import { SvelteComponentTyped } from "svelte";
import type { Toast } from './types.js';
declare const __propDef: {
    props: {
        toast: Toast;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type InfoToastProps = typeof __propDef.props;
export type InfoToastEvents = typeof __propDef.events;
export type InfoToastSlots = typeof __propDef.slots;
export default class InfoToast extends SvelteComponentTyped<InfoToastProps, InfoToastEvents, InfoToastSlots> {
}
export {};
