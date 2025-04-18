<script setup lang="ts">
import { computed } from "vue";

interface PropsInterface {
	name: string;
  type?: string;
  errorMessage?: string;
	placeholder?: string;
  modelValue?: string;
	rules?: any[];
}

const props = withDefaults(defineProps<PropsInterface>(), {
  type: "text",
	rules: () => []
});

const error = computed(() => {
	let error: boolean | string = false;
	
	for (const rule of props.rules) {
		const result = rule(props.modelValue || "");
		
		if (typeof result === 'string') {
			error = result
			break
		}
	}
	
	return error
})

const emit = defineEmits(["update:modelValue"]);

const dynamicClass = computed(() => {
  let resultingClass = [];

  for (const [item, value] of Object.entries(props)) {
    resultingClass.push(typeof value === "boolean" && value ? item : value);
  }

  return resultingClass;
});

const updateValue = (e: Event) => {
  const target = e.target as HTMLInputElement;

	validate()
  emit("update:modelValue", target.value);
};

const validate = () => {
	return !error.value
}

defineExpose({
	validate
})
</script>

<template>
  <div class="input">
    <div class="input-wrapper">
      <div class="input-container">
        <input
	        :name="props.name"
	        :placeholder="props.placeholder"
          :class="dynamicClass"
          :value="modelValue"
          @input="updateValue($event)"
        />
      </div>
      <div v-if="error" class="input-error-container">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.input {
  display: inline-flex;
}
.input-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 360px;
  width: auto;
  min-height: 56px;

  .input-container {
    display: flex;
    align-items: center;
    border: 2px solid black;
    outline: none;
    border-radius: 8px;

    input {
	    width: 100%;
      border: none;
      outline: none;
      padding: 12px 16px;
      border-radius: 8px;
      font-size: 16px;
    }
  }

  .input-error-container {
    color: #4a65b1;
	  font-size: 14px;
  }
}
</style>
