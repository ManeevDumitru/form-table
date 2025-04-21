<script setup lang="ts">
import { InputComponentInterface } from "@/types/Input";
import BaseInput from "@/components/base/BaseInput.vue";
import { reactive, ref, computed, onUnmounted } from "vue";
import BaseButton from "@/components/base/BaseButton.vue";
import { ClientInterface } from "@/types/Client";
import { useGlobalStore } from "@/store/global";
import { FORM_INPUTS } from "@/static/form";

const { addItem } = useGlobalStore();

const model = reactive<ClientInterface>({
  name: "",
  date: "",
  phone: "",
  email: "",
});

let timer: ReturnType<typeof setTimeout> | undefined;

const loading = ref<boolean>(false);
const inputRefs = ref<(InputComponentInterface | null)[]>([]);

const isValid = computed(() => {
  return inputRefs.value.every((refItem) => {
    if (!refItem) {
      return false;
    }
    return refItem.validate();
  });
});

const setData = async () => {
  return new Promise<void>((resolve) => {
    timer = setTimeout(() => {
      addItem({ ...model });
      resolve();
    }, 1000);
  });
};

const resetForm = () => {
	Object.assign(model, {
		name: "",
		date: "",
		phone: "",
		email: "",
	});
};

const submit = async () => {
  try {
    loading.value = true;

    if (!isValid.value) {
      return;
    }

    await setData();
    resetForm();
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
};

const setTestData = () => {
  Object.assign(model, {
    name: "Манеев Дмитрий Константинович",
    date: "09.02.2000",
    phone: "+79683789804",
    email: "test@mail.ru",
  });
};

onUnmounted(() => {
  if (timer) {
    clearTimeout(timer);
  }
});
</script>

<template>
  <div>
    <form
      @submit.prevent="submit()"
      style="display: flex; flex-direction: column"
    >
      <BaseInput
        v-for="(input, index) in FORM_INPUTS"
        :key="input.name"
        :ref="
          (el) => {
            inputRefs[index] = el as unknown as InputComponentInterface;
          }
        "
        v-model="model[input.name]"
        :placeholder="input.placeholder"
        :rules="input.rules"
        :name="input.name"
        style="margin-bottom: 8px"
      />

      <BaseButton
        type="submit"
        :loading="loading"
        :disabled="!isValid || loading"
        class="submit-button"
      >
        Сохранить данные
      </BaseButton>
	    
	    <div class="test-container">
		    <BaseButton @click="setTestData()">Автозаполнение</BaseButton>
		    <p class="subtext">тестовыми данными</p>
	    </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
:deep(form) {
  .input {
    margin-bottom: 12px;
  }
}
.submit-button {
  margin: auto;
}

.test-container {
  margin: 20px auto 0;
  text-align: center;

  .subtext {
    font-size: 14px;
    color: #e2e2e2;
    text-align: center;
  }
}
</style>
