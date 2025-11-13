<script lang="ts">
	import InputGroup from '../InputGroup/InputGroup.svelte';
	import uniqueId from '../../utils/uniqueId.js';

	export let className = '';
	export { className as class };

	export let value = '';
	export let id = '';
	export let title = '';
	export let placeholder = '';
	export let disabled = false;
	export let error = '';
	export let horizontal = false;
	export let required = false;
	export let requiredText = 'required';

	$: inputId = id || uniqueId();
	$: localClass = ['sk-input', internalError && 'error'].join(' ');
	$: internalError = !disabled && required && !value ? requiredText : error;
</script>

<InputGroup {title} class={className} labelFor={inputId} error={internalError} {horizontal} {disabled}>
	<input type="text" id={inputId} class={localClass} {placeholder} bind:value {disabled} />
</InputGroup>
