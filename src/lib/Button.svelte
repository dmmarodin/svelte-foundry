<script lang="ts">
	export let text: string;
	export let useCustomStyle = false;
</script>

<button
	class:custom-button={useCustomStyle}
	class:bg-blue-500={!useCustomStyle}
	class:hover:bg-blue-700={!useCustomStyle}
	class="text-white font-bold py-2 px-4 rounded"
>
	{text}
</button>

<style lang="scss">
	@import './styles/button.scss';
</style>
