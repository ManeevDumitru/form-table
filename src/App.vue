<script setup lang="ts">
import NavBar from "@/components/navigation/NavBar.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import form from "./views/form.vue";
import table from "@/views/table.vue";
import playground from "./views/playground.vue";

const route = useRoute();

const components: any = {
  form,
  table,
	playground
};

const currentComponent = computed(() => {
  const name = route.name as string;
  return components[name];
});
</script>

<template>
  <Suspense>
    <div>
      <nav-bar />

      <keep-alive>
        <component :is="currentComponent" />
      </keep-alive>
    </div>
  </Suspense>
</template>

<style scoped></style>
