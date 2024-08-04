<script>import { getContext } from 'svelte';
import uniqueId from '../../utils/uniqueId.js';
let slot;
export let label;
export let isDefault = false;
const id = uniqueId();
const tabs = getContext('tabs');
isDefault && ($tabs.selected = id);
$: $tabs.data[id] = { id, label, page: slot };
</script>

<div bind:this={slot}>
	<slot />
</div>
