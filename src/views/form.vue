<script setup lang="ts">
import FormMain from "@/components/form/FormMain.vue";
</script>

<template>
  <div class="form-wrapper">
    <div class="form-container">
      <div class="form-header gradient">
        <h1>Форма для заполнения</h1>
      </div>
      <div class="form-content">
        <FormMain />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
	min-height: calc(100vh - 64px);

  .form-container {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 8px;

    .form-header {
      border-radius: 4px 4px 0 0;
      h1 {
        text-align: center;
      }
    }

    .form-content {
      padding: 16px 24px;
      border-radius: 0 0 8px 8px;

      .form-header {
        width: 100%;
        padding: 16px;
        background-color: #f8f8f8;
        text-align: center;
        border-radius: 4px 4px 0 0;
      }
    }
  }
}
</style>
