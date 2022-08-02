<template>
  <div>
    <label class="fs-3" for="tags-basic">Kết quả: </label>
    <b-form-tags placeholder=" " class="fs-5 w-80" input-id="tags-basic" :v-model="result"></b-form-tags>
    <p class="mt-2">Value: {{ props.valueResult }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue'

const props = defineProps(['valueResult'])
const result = ref(['orange', 'blue'])

onMounted(() => {
  console.log(props.valueResult)
})
</script>

<style lang="scss" scoped></style>
