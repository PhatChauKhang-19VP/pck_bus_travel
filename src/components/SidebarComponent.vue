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
        <input type="date" />
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
          v-model="peopleNumber"
        ></b-form-input>
      </div>
      <div class="my-3">
        <div>Khoảng giá (VND)</div>
        <b-form-input
          id="priceFrom"
          type="number"
          v-model="priceFrom"
          min="0"
          max="5000000"
          step="500000"
        ></b-form-input>
        <span class="mx-3">-</span>
        <b-form-input
          id="priceTo"
          type="number"
          v-model="priceTo"
          min="6000000"
          max="10000000"
          step="500000"
        ></b-form-input>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"
import FormSelectDeparture from "./FormSelectDeparture.vue"
import FormSelectDestination from "./FormSelectDestination.vue"

let peopleNumber = ref(0)
let priceFrom = ref(0)
let priceTo = ref(6000000)

// data
const btnData = reactive([
  {
    stt: 1,
    text: "1 - 3 ngày",
    value: "1-3",
    variant: "outline-primary",
    active: true,
  },
  {
    stt: 2,
    text: "4 - 7 ngày",
    value: "4-7",
    variant: "outline-primary",
    active: false,
  },
  {
    stt: 3,
    text: "8 - 10 ngày",
    value: "8-10",
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
}
</script>

<style lang="scss" scoped>
#sidebar {
  display: inline-block;
  width: 300px;
  height: 100%;
  background-color: rgb(242, 242, 242);
  border-radius: 10px;
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
