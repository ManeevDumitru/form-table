<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useGlobalStore } from "@/store/global";
import { CLIENT_HEADERS } from "@/static/client";

const { items } = storeToRefs(useGlobalStore());
</script>

<template>
  <table>
    <thead>
      <tr>
        <th v-for="(item, index) in CLIENT_HEADERS" :key="index">
          {{ item.title }}
        </th>
      </tr>
    </thead>
    <tbody>
    <template v-if="items.length > 0">
	    <template v-for="item in items" :key="item.name">
		    <tr>
			    <td
				    v-for="(field, fieldIndex) in CLIENT_HEADERS"
				    :key="fieldIndex"
			    >
				    {{ item[field.value] }}
			    </td>
		    </tr>
	    </template>
    </template>
     <tr v-else>
	     <td :colspan="CLIENT_HEADERS.length">
		     Нету Клиентов
	     </td>
     </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
table {
  border: thin solid #e2e2e2;
  padding: 0;
  width: 100%;
  border-collapse: collapse;

  thead {
    tr {
      background: #f8f8f8;

      th {
        outline: 0;
        border-right: thin solid #e2e2e2;
        border-bottom: thin solid #e2e2e2;
      }
    }
  }
	
	tbody {
		tr {
			td {
				text-align: center;
				border-right: thin solid #e2e2e2;
				border-bottom: thin solid #e2e2e2;
				padding: 8px 16px;
			}
		}
	}
}
</style>
