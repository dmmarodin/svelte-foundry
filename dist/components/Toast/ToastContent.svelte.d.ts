import { SvelteComponentTyped } from "svelte";
import type { Component } from './types.js';
declare const __propDef: {
    props: {
        icon?: Component | null;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ToastContentProps = typeof __propDef.props;
export type ToastContentEvents = typeof __propDef.events;
export type ToastContentSlots = typeof __propDef.slots;
export default class ToastContent extends SvelteComponentTyped<ToastContentProps, ToastContentEvents, ToastContentSlots> {
}
export {};
