import { type PromiseToastOpts, type ToastOpts } from './types.js';
declare class Toaster {
    success(title: string, content: string, opts?: ToastOpts): void;
    error(title: string, content: string, opts?: ToastOpts): void;
    info(title: string, content: string, opts?: ToastOpts): void;
    warning(title: string, content: string, opts?: ToastOpts): void;
    promise(promise: Promise<unknown>, title: string, content: string, opts?: PromiseToastOpts): Promise<unknown>;
}
export declare const toaster: Toaster;
export {};
