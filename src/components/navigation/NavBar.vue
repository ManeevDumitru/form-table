<script setup lang="ts">
import { useRoute } from "vue-router";
import BaseButton from "@/components/base/BaseButton.vue";
import { computed } from "vue";

import { POSSIBLE_ROUTES } from "@/static/routes";

const route = useRoute();

const currentRoute = computed(() => route.name);
</script>

<template>
  <nav>
    <router-link
      v-for="(item, index) in POSSIBLE_ROUTES"
      :key="index"
      :to="item.path"
    >
      <BaseButton
        variant="text"
        class="custom-button"
        :class="{ active: currentRoute === item.value }"
      >
        {{ item.name }}
      </BaseButton>
    </router-link>
  </nav>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;

  :deep(.custom-button) {
	  color: #747474;
	  
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -3px;
      width: 100%;
      height: 3px;
      background: #F0F0F0;
	    transition: 0.2s;
    }

    &.active {
	    color: #000000;
	    
      &:after {
	      bottom: -5px;
	      height: 5px;
        background: #67AA55;
      }
    }
  }
}
</style>
