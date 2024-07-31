export interface ToastOpts {
    duration?: number;
    props?: object;
    icon?: Component;
    progress?: boolean;
    onClose?: () => void;
    onClick?: () => void;
}
export type PromiseToastOpts = ToastOpts & {
    onSuccessToast?: ToastProps;
    onFailureToast?: ToastProps;
};
export interface ToastProps {
    title?: string;
    content?: string;
}
export declare class Toast {
    id: string;
    component: Component;
    title: string;
    content: string;
    opts: ToastOpts;
    constructor(id: string, component: Component, title: string, content: string, opts?: ToastOpts);
}
export type ToastDict = {
    [id: string]: Toast;
};
export type Component = ConstructorOfATypedSvelteComponent;
