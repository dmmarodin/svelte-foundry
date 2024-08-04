<script>import CheckIcon from '../Icon/CheckIcon.svelte';
import ToastContent from './ToastContent.svelte';
export let toast;
</script>

<ToastContent icon={CheckIcon}>
	<h3 class="sk-success-color sk-toast__title">{toast.title}</h3>
	<p>{toast.content}</p>
</ToastContent>
