<template>
  <div class="card" style="width: 18rem">
    <img
      src="../assets/tour-du-lich-cao-bang-2-ngay-1-dem-750x460.webp"
      class="card-img-top"
      alt=""
    />
    <div class="card-body">
      <h5 class="card-title fw-bold">{{ tourName }}</h5>
      <div class="card-text fs-6 my-3">
        Thời gian khởi hành: <br />
        {{ tourTime }}
      </div>
      <div class="card-text fs-6 my-3">
        Còn: <span class="fs-5 fw-bold text-primary">{{ tourSlot }}</span> chỗ
      </div>
      <div class="card-text text-danger fw-bold my-3">{{ tourPrice }} VND</div>
      <a href="#" class="btn btn-danger float-start mb-3">Đặt tour</a>

      <div>
        <b-button v-b-modal.modal variant="primary" class="float-end mb-3"
          >Xem chi tiết</b-button
        >

        <DetailModal />
      </div>
      <!-- <a href="#" class="btn btn-primary float-end mb-3">Xem chi tiết</a> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import DetailModal from "./DetailModalComponent.vue"
import { ref } from "vue"

const tourName = ref("Tour du lịch Cao Bằng 2 ngày 1 đêm")
const tourPrice = ref("5.000.000")
const tourTime = ref("08:00 - 03/08/2022")
const tourSlot = ref(5)
</script>

<style lang="scss">
.card {
  display: inline-block !important;
}
</style>
