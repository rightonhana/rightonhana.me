<script lang="ts">
</script>

<div>
	<slot />
</div>

<style>
	div {
		background-color: var(--hexagon);
		background-position: 50%;
		background-repeat: no-repeat;
		border-radius: 50%;
		clip-path: polygon(6.7% 25%, 50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%);
		display: inline-block;
		height: var(--size, 10vmin);
		left: 50%;
		top: 50%;
		width: var(--size, 10vmin);
	}
</style>