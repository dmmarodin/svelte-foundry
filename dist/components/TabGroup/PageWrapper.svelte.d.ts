import { SvelteComponent } from "svelte";
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
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type PageWrapperProps = typeof __propDef.props;
export type PageWrapperEvents = typeof __propDef.events;
export type PageWrapperSlots = typeof __propDef.slots;
export default class PageWrapper extends SvelteComponent<PageWrapperProps, PageWrapperEvents, PageWrapperSlots> {
}
export {};
