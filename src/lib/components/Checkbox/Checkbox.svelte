<script lang="ts">
	import InputGroup from '../InputGroup/InputGroup.svelte';
	import uniqueId from '../../utils/uniqueId.js';

	export let id = '';
	export let checked: boolean = false;
	export let disabled = false;
	export let title: string;
	export let horizontal = false;
	let className = '';
	export { className as class };

	$: inputId = id || uniqueId();
</script>

<InputGroup {title} class={className} labelFor={inputId} {horizontal} {disabled}>
	<input id={inputId} type="checkbox" aria-hidden="true" hidden bind:checked disabled />
	<button
		class="sk-checkbox"
		class:disabled
		on:click={() => !disabled && (checked = !checked)}
		role="checkbox"
		aria-checked={checked}
		tabindex={disabled ? -1 : 0}
	>
		{#if checked}
			<div class="sk-checkbox__check"></div>
		{/if}
	</button>
</InputGroup>
