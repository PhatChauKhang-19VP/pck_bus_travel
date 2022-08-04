<template>
  <TheHeader />
  <div id="main">
    <TheSidebar />
    <div id="mainContent">
      <TheSearchResult class="mb-3" />
      <div id="cardGroup">
        <template v-for="p in listTours" :key="p.ma_tour">
          <TheCard class="" :tour="p" />
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TheHeader from "@/components/HeaderComponent.vue" // @ is an alias to /src
import TheSidebar from "@/components/SidebarComponent.vue"
import TheCard from "@/components/CardComponent.vue"
import TheSearchResult from "@/components/SearchResultComponent.vue"
import { reactive, ref, onMounted, computed } from "vue"
import { useStore } from "vuex"
import { key } from "../store"
const store = useStore(key)

onMounted(async () => {
  const response = await fetch("http://localhost:3000/tours/tim-tour", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ds_ma_tinh: Array.from(store.state.provincesSelected),
      ngay_di: "",
      so_nguoi: store.state.filterObject.so_nguoi,
      from_so_ngay: store.state.filterObject.so_ngay.value.split("-")[0],
      to_so_ngay: store.state.filterObject.so_ngay.value.split("-")[1],
      from_gia_tien: store.state.filterObject.khoang_gia.low,
      to_gia_tien: store.state.filterObject.khoang_gia.high,
    }),
  })
  const data = await response.json()
  store.commit("setTourSearchResult", Array.from(data))
})

const listTours = computed(() => {
  return store.state.tourSearchResult
})
</script>

<style lang="scss" scoped>
#main {
  display: inline-block;
  width: 100%;
  height: 100%;
  position: relative;
}

#mainContent {
  display: inline-block;
  width: calc(100% - 320px);
  position: absolute;
  left: 310px;
}

#cardGroup {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
