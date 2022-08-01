<template>
  <b-form-select v-model="form" :options="options"></b-form-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const form = ref()
const options = [
  { value: null, text: 'Chọn điểm đến', disabled: true },
  { value: 'a', text: 'TP.Hồ Chí Minh' },
  { value: 'b', text: 'Hà Nội' },
]
</script>

<style lang="scss" scoped>
.form-select {
  width: 96%;
}
</style>
