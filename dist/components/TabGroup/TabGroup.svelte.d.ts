import { SvelteComponent } from "svelte";
import type { TabMode } from './types.ts';
declare const __propDef: {
    props: {
        class?: string;
        mode?: TabMode;
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
export type TabGroupProps = typeof __propDef.props;
export type TabGroupEvents = typeof __propDef.events;
export type TabGroupSlots = typeof __propDef.slots;
export default class TabGroup extends SvelteComponent<TabGroupProps, TabGroupEvents, TabGroupSlots> {
}
export {};
