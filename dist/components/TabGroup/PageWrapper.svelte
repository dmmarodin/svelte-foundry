<script>import { getContext } from 'svelte';
export let id = '';
let selected;
let element;
let style;
const tabs = getContext('tabs');
const height = getContext('height');
$: selected = $tabs.selected === id;
$: if ($tabs.selected === id) {
    setTimeout(() => {
        $height = element?.clientHeight || $height;
    }, 200);
}
</script>

<div
	class="sk-tabs__page"
	class:selected
	class:unselected={selected && !selected}
	data-page={id}
	bind:this={element}
	style:visibility={$tabs.mode === 'visibility' && !selected ? 'hidden' : ''}
	style:display={$tabs.mode === 'diplay' && !selected ? 'none' : ''}
	style:opacity={$tabs.mode === 'opacity' && !selected ? '0' : ''}
	style:position={$tabs.mode !== 'none' && !selected ? 'absolute' : ''}
>
	<slot />
</div>
