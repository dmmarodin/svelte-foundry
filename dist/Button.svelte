<script>export let text;
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

<style>.custom-button {
  background-color: #3498db;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}
.custom-button:hover {
  background-color: #217dbb;
}</style>
