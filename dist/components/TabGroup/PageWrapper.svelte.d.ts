import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        id?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type PageWrapperProps = typeof __propDef.props;
export type PageWrapperEvents = typeof __propDef.events;
export type PageWrapperSlots = typeof __propDef.slots;
export default class PageWrapper extends SvelteComponentTyped<PageWrapperProps, PageWrapperEvents, PageWrapperSlots> {
}
export {};
