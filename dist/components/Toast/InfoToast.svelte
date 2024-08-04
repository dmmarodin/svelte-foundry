<script>import InfoIcon from '../Icon/InfoIcon.svelte';
import ToastContent from './ToastContent.svelte';
export let toast;
</script>

<ToastContent icon={InfoIcon}>
	<h3 class="sk-info-color sk-toast__title">{toast.title}</h3>
	<p>{toast.content}</p>
</ToastContent>
