<script setup lang="ts">
import { computed } from "vue";
import LoaderIcon from "@/assets/icons/LoaderIcon.vue";

interface PropsInterface {
  size?: string;
  disabled?: boolean;
  loading?: boolean;
	type?: 'button' | 'submit';
	variant?: 'gradient' | 'text';
}

const props = withDefaults(defineProps<PropsInterface>(), {
	type: "button",
  size: "default",
  disabled: false,
  loading: false,
	variant: "gradient",
});

const dynamicClass = computed(() => {
  let resultingClass = [];

  for (const [item, value] of Object.entries(props)) {
    resultingClass.push(typeof value === "boolean" && value ? item : value);
  }

  return resultingClass;
});


</script>

<template>
  <div class="button-wrapper">
	  <button :type="props.type" :class="dynamicClass" :disabled="props.disabled">
		  <slot v-if="!props.loading" slot="default" />
		  <LoaderIcon v-else class="loader" style="height: 24px" />
	  </button>
  </div>
</template>

<style scoped lang="scss">
.button-wrapper {
	display: inline-flex;
	position: relative;
	
}

button {
	&.default {
		min-height: 36px;
		min-width: 136px;
		font-size: 18px;
		font-weight: bold;
		border: none;
		border-radius: 4px;
		padding: 0 12px;
	}
	
	&.gradient {
		&:not(:disabled) {
			&:hover {
				color: white;
				--initialStateFadeColor1: #9BCF94;
				--initialStateFadeColor2: #9BCF94;;
			}
			
			&:active {
				color: white;
				--initialStateFadeColor1: #77b96f;
				--initialStateFadeColor2: #77b96f;
			}
		}
		
		&:disabled {
			color: #757575;
			--initialStateFadeColor1: rgba(236, 236, 236);
			--initialStateFadeColor2: rgba(236, 236, 236);
		}
	}
	
	&.text {
		background: transparent;
	}
	
	&.loading {
		padding: 0 18px;
		min-width: auto;
	}
	
	&:not(:disabled) {
		cursor: pointer;
	}
}
</style>
