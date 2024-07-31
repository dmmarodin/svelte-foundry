import { CheckIcon, ErrorIcon, InfoIcon, SpinnerIcon, WarningIcon } from '../../index.js';
import uniqueId from '../../utils/uniqueId.js';
import ErrorToast from './ErrorToast.svelte';
import InfoToast from './InfoToast.svelte';
import PromiseToast from './PromiseToast.svelte';
import SuccessToast from './SuccessToast.svelte';
import { toastStore } from './ToastStore.js';
import WarningToast from './WarningToast.svelte';
import { Toast } from './types.js';
class Toaster {
    success(title, content, opts) {
        const id = uniqueId();
        const toast = new Toast(id, SuccessToast, title, content, { ...opts, icon: CheckIcon });
        toastStore.push(toast);
    }
    error(title, content, opts) {
        const id = uniqueId();
        const toast = new Toast(id, ErrorToast, title, content, { ...opts, icon: ErrorIcon });
        toastStore.push(toast);
    }
    info(title, content, opts) {
        const id = uniqueId();
        const toast = new Toast(id, InfoToast, title, content, { ...opts, icon: InfoIcon });
        toastStore.push(toast);
    }
    warning(title, content, opts) {
        const id = uniqueId();
        const toast = new Toast(id, WarningToast, title, content, { ...opts, icon: WarningIcon });
        toastStore.push(toast);
    }
    promise(promise, title, content, opts) {
        const loadingToastId = uniqueId();
        const loadingToast = new Toast(loadingToastId, PromiseToast, title, content, {
            ...opts,
            icon: SpinnerIcon,
            progress: false
        });
        toastStore.push(loadingToast);
        return promise
            .then((result) => {
            toastStore.delete(loadingToastId);
            const successToast = new Toast(uniqueId(), SuccessToast, opts?.onSuccessToast?.title ?? title, opts?.onSuccessToast?.content ?? content, {
                ...opts,
                icon: CheckIcon
            });
            toastStore.push(successToast);
            return new Promise((res) => res(result));
        })
            .catch((e) => {
            toastStore.delete(loadingToastId);
            const rejectionToast = new Toast(uniqueId(), ErrorToast, opts?.onFailureToast?.title ?? title, opts?.onFailureToast?.content ?? content, {
                ...opts,
                icon: ErrorIcon
            });
            toastStore.push(rejectionToast);
            return new Promise((_, rej) => rej(e));
        });
    }
}
export const toaster = new Toaster();
