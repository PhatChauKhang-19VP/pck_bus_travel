<template>
  <b-form-select v-model="selected" :options="options"></b-form-select>
</template>

<script lang="ts" setup>
import { onMounted, onUpdated, ref } from "vue"
import { Province } from "../models/Province.js"
import { useStore } from "vuex"
import { key } from "../store"

const store = useStore(key)

const selected = ref(null)

const options = ref<{ value: any; text: string; disabled: boolean }[]>([
  { value: "", text: "Chọn tỉnh/thành phố", disabled: true },
])

const listProvinces = ref<Province[]>([])

onMounted(async () => {
  const response = await fetch("http://localhost:3000/address/provinces")
  listProvinces.value = await response.json()

  options.value.push(
    ...listProvinces.value.map((item) => ({
      value: item.code,
      text: `${item.code}. ${item.full_name}`,
      disabled: false,
    }))
  )
})

onUpdated(() => {
  if (listProvinces.value.find((item) => item.code == selected.value)) {
    store.commit(
      "addProvince",
      listProvinces.value.find(
        (item) => item.code == selected.value
      ) as Province
    )
  }
})
</script>

<style lang="scss" scoped>
.form-select {
  width: 96%;
}
</style>
