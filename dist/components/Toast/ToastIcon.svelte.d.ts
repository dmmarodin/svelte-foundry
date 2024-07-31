import { SvelteComponentTyped } from "svelte";
import type { Component } from './types.js';
declare const __propDef: {
    props: {
        icon: Component;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ToastIconProps = typeof __propDef.props;
export type ToastIconEvents = typeof __propDef.events;
export type ToastIconSlots = typeof __propDef.slots;
export default class ToastIcon extends SvelteComponentTyped<ToastIconProps, ToastIconEvents, ToastIconSlots> {
}
export {};
