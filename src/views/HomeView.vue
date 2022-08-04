<template>
  <TheHeader />
  <div id="main">
    <TheSidebar />
    <div id="mainContent">
      <TheSearchResult class="mb-3" />
      <div id="cardGroup">
        <template v-for="(p, index) in listTours" :key="p.ma_tour">
          <template
            v-if="
              TOUR_PER_PAGE * (currentPage - 1) <= index &&
              index < TOUR_PER_PAGE * currentPage
            "
          >
            <TheCard class="" :tour="p" />
          </template>
        </template>
        <center>
          <div class="overflow-auto py-2" :v-show="rows >= 1">
            <!-- Use text in props -->
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              first-text="First"
              prev-text="Prev"
              next-text="Next"
              last-text="Last"
            ></b-pagination>
          </div>
        </center>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TheHeader from "@/components/HeaderComponent.vue" // @ is an alias to /src
import TheSidebar from "@/components/SidebarComponent.vue"
import TheCard from "@/components/CardComponent.vue"
import TheSearchResult from "@/components/SearchResultComponent.vue"
import { reactive, ref, onMounted, computed, onUpdated } from "vue"
import { useStore } from "vuex"
import { key } from "../store"

const currentPage = ref(1)
const TOUR_PER_PAGE = 8
const perPage = ref(TOUR_PER_PAGE)
const rows = ref(1)

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

store.watch(
  (state) => state.tourSearchResult,
  () => {
    console.log("store.watch", store.state.tourSearchResult)

    currentPage.value = 1
    rows.value = parseInt(
      `${store.state.tourSearchResult.length / TOUR_PER_PAGE}`
    )
  }
)
</script>

<style lang="scss" scoped>
#main {
  display: inline-block;
  width: 100%;
  height: 100%;
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
