<template>
  <div class="card" style="width: 18rem">
    <img
      src="../assets/tour-du-lich-cao-bang-2-ngay-1-dem-750x460.webp"
      class="card-img-top"
      alt=""
    />
    <div class="card-body">
      <h5 class="card-title fw-bold my-card-title">
        {{ props.tour.ten_tour }}
      </h5>
      <div class="card-text fs-6 my-3">
        Thời gian khởi hành: <br />{{ props.tour.bat_dau }}
      </div>
      <div class="card-text fs-6 my-3">Số ngày: {{ props.tour.so_ngay }}</div>
      <div class="card-text fs-6 my-3">
        Còn:
        <span class="fs-5 fw-bold text-primary">{{
          props.tour.so_slot_con_lai
        }}</span>
        chỗ
      </div>
      <div class="card-text text-danger fw-bold my-3">
        {{ props.tour.gia_tien_dk }} VND
      </div>
      <a href="#" class="btn btn-danger float-start mb-3">Đặt tour</a>
      <a href="#" class="btn btn-primary float-end mb-3">Xem chi tiết</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"
import { Tour } from "../models/Tour"

interface IProps {
  tour: Tour
}
const props = defineProps<IProps>()
</script>

<style lang="scss">
.card {
  display: inline-block !important;
}

.my-card-title {
  text-overflow: ellipsis;
}
</style>
