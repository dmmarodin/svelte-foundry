<script>import ToastIcon from './ToastIcon.svelte';
export let icon = null;
</script>

{#if icon}
	<ToastIcon {icon} />
{/if}
<div class="sk-toast__content flex-1">
	<slot />
</div>
