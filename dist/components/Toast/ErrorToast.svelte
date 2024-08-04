<script>import ErrorIcon from '../Icon/ErrorIcon.svelte';
import ToastContent from './ToastContent.svelte';
export let toast;
</script>

<ToastContent icon={ErrorIcon}>
	<h3 class="sk-error-color sk-toast__title">{toast.title}</h3>
	<p>{toast.content}</p>
</ToastContent>
