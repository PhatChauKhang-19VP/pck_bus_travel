<template>
  <div>
    <label class="fs-3" for="tags-basic">Điểm đến đã chọn: </label>
    <b-form-tags
      placeholder=" "
      class="fs-5"
      input-id="tags-basic"
      v-model="result"
      @click="testOnClick"
    >
    </b-form-tags>
    <p class="mt-2">
      Chúng tôi tìm thấy: <span color="red">{{ tourNumber }}</span> tour cho bạn
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, onUpdated } from "vue"
import { useStore } from "vuex"
import { key } from "../store"
const store = useStore(key)

const result = computed(() => store.getters.getArrayProvincesNames)

const testOnClick = (e: any) => {
  if (e.target.tagName === "BUTTON") {
    const pid = e.target.parentNode.title.split(". ")[0]
    store.commit("removeProvince", pid)
  }
}

onUpdated(() => {
  console.log("onUpdated")
})

const tourNumber = computed(() => store.state.tourSearchResult.length)
</script>

<style lang="scss" scoped></style>
