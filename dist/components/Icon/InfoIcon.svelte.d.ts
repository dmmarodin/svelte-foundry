import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type InfoIconProps = typeof __propDef.props;
export type InfoIconEvents = typeof __propDef.events;
export type InfoIconSlots = typeof __propDef.slots;
export default class InfoIcon extends SvelteComponentTyped<InfoIconProps, InfoIconEvents, InfoIconSlots> {
}
export {};
