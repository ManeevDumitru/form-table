<script setup lang="ts"></script>

<template>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
		<circle cx="8" cy="8" r="6" fill="none" stroke="#E0E0E0" stroke-width="1.5"/>
		<circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="24,36">
			<animateTransform
				attributeName="transform"
				type="rotate"
				from="0 8 8"
				to="360 8 8"
				dur="1.5s"
				repeatCount="indefinite"
				begin="0.5s"/>
		</circle>
	</svg>
</template>

<style scoped lang="scss"></style>
