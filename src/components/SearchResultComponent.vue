<template>
  <div>
    <label class="fs-3" for="tags-basic">Điểm đến đã chọn: </label>
    <b-form-tags
      placeholder=" "
      class="fs-5 w-80"
      input-id="tags-basic"
      v-model="result"
      @click="testOnClick"
    >
    </b-form-tags>
    <p class="mt-2">Value: {{ result }}</p>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  defineProps,
  onMounted,
  onUpdated,
  ref,
  defineEmits,
  watch,
  PropType,
} from "vue"
import { Province } from "../models/Province.js"
import { useStore } from "vuex"
import { key } from "../store"
const store = useStore(key)
// const result = ref([
//   "Apple",
//   "Orange",
//   "Banana",
//   "Lime",
//   "Peach",
//   "Chocolate",
//   "Strawberry",
// ])
const result = computed(() => store.getters.getArrayProvincesNames)

const testOnClick = (e: any) => {
  if (e.target.tagName === "button") {
    const pid = e.target.parentNode.title.split(". ")[0]
    store.commit("removeProvince", pid)
  }
}

onUpdated(() => {
  console.log("onUpdated")
})

const props = defineProps({
  testProps: { type: Array, required: true },
})
</script>

<style lang="scss" scoped></style>
