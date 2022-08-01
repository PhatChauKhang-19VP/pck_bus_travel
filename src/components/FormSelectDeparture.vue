<template>
  <b-form-select v-model="form" :options="options"></b-form-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const form = ref()
const options = [
  { value: null, text: 'Chọn điểm đi', disabled: true },
  { value: 'a', text: 'TP.Hồ Chí Minh' },
  { value: 'b', text: 'Hà Nội' },
]

// const rawRes = await fetch('https://2bf5-118-69-176-55.ap.ngrok.io/address/provinces')
// const data = await rawRes.json()
// console.log(data)
</script>

<style lang="scss" scoped>
.form-select {
  width: 96%;
}
</style>
