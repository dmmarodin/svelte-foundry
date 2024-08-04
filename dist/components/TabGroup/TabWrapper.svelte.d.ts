import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        class?: string;
        id?: string;
        selected?: boolean;
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
export type TabWrapperProps = typeof __propDef.props;
export type TabWrapperEvents = typeof __propDef.events;
export type TabWrapperSlots = typeof __propDef.slots;
export default class TabWrapper extends SvelteComponent<TabWrapperProps, TabWrapperEvents, TabWrapperSlots> {
}
export {};
