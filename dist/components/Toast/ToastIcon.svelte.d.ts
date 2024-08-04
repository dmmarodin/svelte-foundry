import { SvelteComponent } from "svelte";
import type { Component } from './types.js';
declare const __propDef: {
    props: {
        icon: Component;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type ToastIconProps = typeof __propDef.props;
export type ToastIconEvents = typeof __propDef.events;
export type ToastIconSlots = typeof __propDef.slots;
export default class ToastIcon extends SvelteComponent<ToastIconProps, ToastIconEvents, ToastIconSlots> {
}
export {};
