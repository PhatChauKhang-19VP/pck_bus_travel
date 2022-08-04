<template>
  <div class="card mb-3" style="width: 24%">
    <img
      src="../assets/tour-du-lich-cao-bang-2-ngay-1-dem-750x460.webp"
      class="card-img-top"
      alt=""
    />
    <div class="card-body">
      <h5 class="card-title fw-bold my-card-title">
        {{ props.tour.ten_tour }}
      </h5>
      <div class="card-text fs-6 mb-1 d-flex justify-content-between">
        <div>
          Số ngày:
          <span class="fs-5 fw-bold text-primary">{{
            props.tour.so_ngay
          }}</span>
        </div>
        <div>
          Còn:
          <span class="fs-5 fw-bold text-primary">{{
            props.tour.so_slot_con_lai
          }}</span>
          chỗ
        </div>
      </div>
      <!-- <div class="card-text fs-6 my-1">
        Còn:
        <span class="fs-5 fw-bold text-primary">{{
          props.tour.so_slot_con_lai
        }}</span>
        chỗ
      </div> -->
      <div class="card-text fs-6 my-1">
        Thời gian khởi hành:
        <strong>{{ getDateMMDDYYYY(new Date(props.tour.bat_dau)) }}</strong>
      </div>
      <div class="card-text fs-6 my-1">
        Thời hạn đăng kí:
        <strong>{{ getDateMMDDYYYY(new Date(props.tour.kt_dk_ngay)) }}</strong>
      </div>
      <div class="card-text fs-5 fw-bold my-1" style="color: #ff6961">
        {{ props.tour.gia_tien_dk }} VND
      </div>
      <a
        href="#"
        class="btn fw-bold float-start mb-2"
        style="background-color: #ff6961; color: white"
        >Đặt tour</a
      >

      <div>
        <b-button
          v-b-modal.modal
          variant="primary"
          class="fw-bold float-end mb-2"
          >Xem chi tiết</b-button
        >

        <DetailModal />
      </div>
      <!-- <a href="#" class="btn btn-primary float-end mb-3">Xem chi tiết</a> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"
import { Tour } from "../models/Tour"
import DetailModal from "./DetailModalComponent.vue"

const getDateMMDDYYYY = (date: Date) => {
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  return `${month}/${day}/${year}`
}

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
  height: 70px;
}
</style>
