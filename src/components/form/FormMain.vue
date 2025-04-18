<script setup lang="ts">
import { InputComponentInterface } from "@/types/Input";
import {
  isRequired,
  isValidDate,
  isEmail,
  isNameValid,
  isPhoneNumber,
} from "@/helpers/validations";
import BaseInput from "@/components/base/BaseInput.vue";
import { isRef, Reactive, reactive, ref, Ref, computed } from "vue";
import BaseButton from "@/components/base/BaseButton.vue";
import { ClientInterface } from "@/types/Client";
import { useGlobalStore } from "@/store/global";

const { addItem } = useGlobalStore();

const model: Reactive<ClientInterface> = reactive({
  name: "",
  date: "",
  phone: "",
  email: "",
});
const nameInputRef: Ref<InputComponentInterface | null> = ref(null);
const dateInputRef: Ref<InputComponentInterface | null> = ref(null);
const phoneInputRef: Ref<InputComponentInterface | null> = ref(null);
const emailInputRef: Ref<InputComponentInterface | null> = ref(null);

const inputRefs = [nameInputRef, dateInputRef, phoneInputRef, emailInputRef];

let timer: ReturnType<typeof setTimeout> | undefined;
let loading = ref(false);
let isValid = computed(() => {
  return inputRefs.every((refItem) => {
    if (!isRef(refItem) || !refItem.value) {
      return false;
    }
    return refItem.value.validate();
  });
});

const setData = async () => {
  return new Promise<void>((resolve) => {
    timer = setTimeout(() => {
      addItem({ ...model });

      Object.assign(model, {
        name: "",
        date: "",
        phone: "",
        email: "",
      });
      resolve();
    }, 1000);
  });
};

const submit = async () => {
  loading.value = true;

  for (const refItem of inputRefs) {
    if (!isRef(refItem) || !refItem.value) {
      return;
    }
  }

  if (!isValid) {
    return;
  }

  await setData();

  loading.value = false;
};

const setTestData = () => {
  const testData = {
    name: "Манеев Дмитрий Константинович",
    date: "09.02.2000",
    phone: "+79683789804",
    email: "test@mail.ru",
  };

  Object.assign(model, {
    ...testData,
  });
};
</script>

<template>
  <div>
    <form
      ref="form"
      @submit.prevent
      style="display: flex; flex-direction: column"
    >
      <BaseInput
        ref="nameInputRef"
        v-model="model.name"
        placeholder="Введите имя"
        :rules="[isRequired(), isNameValid]"
        name="name"
        style="margin-bottom: 8px"
      />
      <BaseInput
        ref="dateInputRef"
        v-model="model.date"
        placeholder="Введите дату рождения"
        :rules="[isRequired(), isValidDate()]"
        name="name"
      />
      <BaseInput
        ref="phoneInputRef"
        v-model="model.phone"
        placeholder="Введите номер телефона"
        :rules="[isRequired(), isPhoneNumber]"
        name="name"
      />
      <BaseInput
        ref="emailInputRef"
        placeholder="Введите почту"
        v-model="model.email"
        :rules="[isRequired(), isEmail]"
        name="name"
      />

      <BaseButton
        :loading="loading"
        :disabled="!isValid || loading"
        class="submit-button"
        @click="submit()"
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

  .subtext {
    font-size: 14px;
    color: #e2e2e2;
    text-align: center;
  }
}
</style>
