<template>
  <div id="sidebar">
    <div id="title">Lọc kết quả</div>
    <div id="body" class="pb-1">
      <div class="my-3">
        <div>Điểm đến</div>
        <FormSelectDestination />
      </div>
      <div class="my-3" id="datepicker">
        <div>Ngày đi</div>
        <input type="date" @input="onInputNgayDi" />
      </div>
      <div class="my-3">
        <div>Số ngày</div>
        <div id="button">
          <template v-for="value in btnData" :key="value.stt">
            <b-button
              size="sm"
              :variant="value.variant"
              @click="btnPickDayRangeClick(value.stt)"
            >
              {{ value.text }}
            </b-button>
          </template>
          <!-- <b-button size="sm" variant="outline-primary">1 - 3 ngày</b-button>
          <b-button size="sm" variant="outline-primary">4 - 7 ngày</b-button>
          <b-button size="sm" variant="outline-primary">8 - 10 ngày</b-button> -->
        </div>
      </div>
      <div class="my-3">
        <div>Số người</div>
        <b-form-input
          type="number"
          min="0"
          v-model="filterObject.so_nguoi"
        ></b-form-input>
      </div>
      <div class="my-3">
        <div>Khoảng giá (VND)</div>
        <b-form-input
          id="priceFrom"
          type="number"
          v-model="filterObject.khoang_gia.low"
          min="0"
          max="5000"
          step="100"
        ></b-form-input>
        <span class="mx-3">-</span>
        <b-form-input
          id="priceTo"
          type="number"
          v-model="filterObject.khoang_gia.high"
          min="1000"
          max="10000"
          step="100"
        ></b-form-input>
      </div>
      <center><b-button @click="search">Tìm tour</b-button></center>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, defineProps, computed, onMounted, onUpdated } from "vue"
import { storeKey } from "vuex"
import FormSelectDeparture from "./FormSelectDeparture.vue"
import FormSelectDestination from "./FormSelectDestination.vue"
import { useStore } from "vuex"
import { key } from "../store"
const store = useStore(key)

let filterObject = ref({
  ngay_di: "",
  so_ngay: {
    stt: 1,
    text: "1 - 3 ngày",
    value: "1-3",
    variant: "outline-primary",
    active: true,
  },
  so_nguoi: "1",
  khoang_gia: {
    low: "100",
    high: "9999",
  },
})

// data
const btnData = reactive([
  {
    stt: 1,
    text: "1 - 7 ngày",
    value: "1-7",
    variant: "outline-primary",
    active: true,
  },
  {
    stt: 2,
    text: "8 - 14 ngày",
    value: "8-14",
    variant: "outline-primary",
    active: false,
  },
  {
    stt: 3,
    text: "14+ ngày",
    value: "14-100000",
    variant: "outline-primary",
    active: false,
  },
])

const btnPickDayRangeClick = (stt: number) => {
  console.log("btnPickDayRangeClick", stt)

  btnData.forEach((value) => {
    value.active = false
    value.variant = "outline-primary"
  })
  btnData[stt - 1].active = true
  btnData[stt - 1].variant = "primary"
  filterObject.value.so_ngay = btnData[stt - 1]
}

onUpdated(() => {
  console.log(filterObject.value)

  store.commit("setFilterObject", filterObject.value)
})

const onInputNgayDi = (e: any) => {
  console.log("onInputNgayDi", e.target.value)
  filterObject.value.ngay_di = e.target.value

  store.commit("setFilterObject", filterObject.value)
}

store.watch(
  (state) => state.filterObject,
  (value) => {
    console.log("store.watch", value)
    filterObject.value = value

    console.log("tim tour")
  }
)

const search = () => {
  console.log("search")

  let ngay_di = ""

  try {
    ngay_di = new Date(filterObject.value.ngay_di).toISOString().split("T")[0]
  } catch (error) {
    ngay_di = ""
  }

  fetch("http://localhost:3000/tours/tim-tour", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ds_ma_tinh: Array.from(store.state.provincesSelected).map((value) => {
        return {
          ma_tinh: value.code,
        }
      }),
      ngay_di: ngay_di,
      so_nguoi: store.state.filterObject.so_nguoi,
      from_so_ngay: store.state.filterObject.so_ngay.value.split("-")[0],
      to_so_ngay: store.state.filterObject.so_ngay.value.split("-")[1],
      from_gia_tien: store.state.filterObject.khoang_gia.low,
      to_gia_tien: store.state.filterObject.khoang_gia.high,
    }),
  })
    .then((res) => {
      console.log("res", res)
      return res.json()
    })
    .then((data) => {
      console.log(data)

      store.commit("setTourSearchResult", Array.from(data))
    })
}
</script>

<style lang="scss" scoped>
#sidebar {
  display: inline-block;
  width: 300px;
  height: 500px;
  background-color: rgb(242, 242, 242);
  border-radius: 10px;

  position: fixed;
  top: 80px;
  left: 10px;
}

#title {
  width: 100%;
  height: 40px;
  background-color: #0d6efd;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: white;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  vertical-align: middle;
}

#body {
  padding-left: 10px;
}

#datepicker {
  > input {
    width: 96%;
    padding: 0.375rem 2.25rem 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    border: 1px solid #ced4da;
    border-radius: 0.375rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  input[type="date"] {
    width: 96%;
    padding-right: 10px;
  }
}

#button {
  width: 96%;
  display: flex;
  justify-content: space-between;
}

input[type="number"] {
  width: 96%;
}

input[type="number"]#priceFrom,
input[type="number"]#priceTo {
  display: inline-block;
  width: 41%;
}
</style>
