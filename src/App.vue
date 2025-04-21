<script setup lang="ts">
import NavBar from "@/components/navigation/NavBar.vue";
import { useRoute } from "vue-router";
import {computed, defineAsyncComponent} from "vue";

const route = useRoute();

const components: any = {
  form: defineAsyncComponent(() => import("@/views/form.vue")),
  table: defineAsyncComponent(() => import("@/views/table.vue")),
	playground: defineAsyncComponent(() => import("@/views/playground.vue")),
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
