<script setup lang="ts">
import BaseButton from "@/components/base/BaseButton.vue";
</script>

<template>
	<div class="component-container">
		<div>
			<base-button class="test"> Далее </base-button>
		</div>
		<div>
			<base-button disabled> Далее </base-button>
		</div>
		<div>
			<base-button loading style="margin-right: 8px"> Далее </base-button>
			<base-button loading disabled> Далее </base-button>
		</div>
	</div>
</template>

<style scoped lang="scss">
.component-container {
	padding: 16px;
	background: #ffffff;
	
	& > div {
		margin-bottom: 10px;
	}
}
</style>