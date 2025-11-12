<script lang="ts">
	export let className = '';
	export { className as class };
</script>

<button type="button" class="sk-button {className}" on:click {...$$restProps}>
	{#if $$slots['icon-left']}
	<span class="sk-button__icon__left">
		<slot name="icon-left" />
	</span>
	{/if}
	<slot />
	{#if $$slots['icon-right']}
	<span class="sk-button__icon__right">
		<slot name="icon-right" />
	</span>
	{/if}
</button>

<style>
	button.sk-button {
		outline: 0;
		border: none;
	}
</style>
