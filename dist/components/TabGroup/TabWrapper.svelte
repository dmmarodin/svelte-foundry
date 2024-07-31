<script>import { getContext } from 'svelte';
let className = '';
export { className as class };
export let id = '';
export let selected = false;
const tabs = getContext('tabs');
const click = () => {
    $tabs.selected = id;
};
$: selected = $tabs.selected === id;
</script>

<button class="sk-tabs__tab {className}" class:selected on:click={click} data-page={id}>
	<slot />
</button>
