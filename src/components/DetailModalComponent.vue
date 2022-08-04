<template>
  <b-modal
    hide-footer
    no-close-on-backdrop
    id="modal"
    size="xl"
    title="Thông tin tour"
  >
    <h3 class="my-1 fw-bold">{{ props.tour.ten_tour }}</h3>
    <div class="my-1">
      Thời gian khởi hành:
      {{ new Date(`${props.tour.bat_dau}`).toLocaleString() }}
    </div>
    <div class="my-1">
      Địa điểm khởi hành: {{ fetchMove[0]?.ten_noi_khoi_hanh }}
    </div>
    <div class="my-1">Số chỗ còn lại: {{ props.tour.so_slot_con_lai }}</div>
    <a
      href="#"
      class="btn fw-bold float-start mb-2"
      style="background-color: #ff6961; color: white"
      >Đặt tour ngay</a
    >
    <br />
    <br />
    <div>
      <b-tabs content-class="mt-3">
        <b-tab title="Lịch trình:" active
          ><b-table
            bordered
            :fields="headerSchedule"
            :items="fetchSchedule"
          ></b-table
        ></b-tab>
        <b-tab title="Lộ trình"
          ><b-table bordered :fields="headerMove" :items="fetchMove"></b-table
        ></b-tab>
      </b-tabs>
    </div>
  </b-modal>
</template>

<script lang="ts" setup>
import { reactive, ref, defineProps, onMounted, onUpdated } from "vue"
import { Tour } from "../models/Tour"
import { Schedule } from "../models/Schedule"
import { Move } from "../models/Move"

interface IProps {
  tour: Tour
}

const props = defineProps<IProps>()

onMounted(() => {
  console.log("Mounted")
})

onUpdated(() => {
  console.log("Updated")

  fetch(`http://localhost:3000/tours/lich-trinh/${props.tour.ma_tour}`)
    .then((res) => res.json())
    .then((data: Schedule[]) => {
      console.log(data)
      fetchSchedule.value = data.map((item, index) => {
        return {
          ...item,
          ngay_thu: index + 1,
          tg_bat_dau: new Date(item.tg_bat_dau).toLocaleTimeString(),
          tg_ket_thuc: new Date(item.tg_ket_thuc).toLocaleTimeString(),
          stt: 1,
        }
      })
    })

  fetch(`http://localhost:3000/tours/lo-trinh/${props.tour.ma_tour}`)
    .then((res) => res.json())
    .then((data: Move[]) => {
      console.log(data)
      fetchMove.value = data.map((move, index) => {
        return {
          ...move,
          stt: index + 1,
        }
      })
    })
})

const headerSchedule = ref([
  {
    key: "ngay_thu",
    label: "Ngày thứ",
    thStyle: { width: "8%" },
  },
  {
    key: "stt",
    label: "STT",
    thStyle: { width: "8%" },
  },
  {
    key: "tg_bat_dau",
    label: "Thời gian bắt đầu",
    thStyle: { width: "14%" },
  },
  {
    key: "tg_ket_thuc",
    label: "Thời gian kết thúc",
    thStyle: { width: "14%" },
  },
  {
    key: "full_address",
    label: "Địa điểm tham quan",
    thStyle: { width: "17%" },
  },
  {
    key: "add_desc",
    label: "Mô tả",
  },
])

const headerMove = ref([
  {
    key: "stt",
    label: "STT",
    thStyle: { width: "8%" },
  },
  {
    key: "ten_noi_khoi_hanh",
    label: "Nơi khởi hành",
    thStyle: { width: "14%" },
  },
  {
    key: "ten_noi_den",
    label: "Nơi đến",
    thStyle: { width: "14%" },
  },
  {
    key: "tg_di_chuyen",
    label: "Thời gian di chuyển (giờ)",
    thStyle: { width: "14%" },
  },
])

const fetchSchedule = ref<Schedule[]>([])
const fetchMove = ref<Move[]>([])
</script>

<style lang="scss" scoped>
* {
  font-family: "Quicksand", sans-serif;
}
</style>
