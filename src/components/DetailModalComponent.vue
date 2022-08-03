<template>
  <b-modal
    no-close-on-backdrop
    hide-footer
    id="modal"
    size="xl"
    title="Thông tin tour"
  >
    <h3 class="my-1 fw-bold">{{ tourName }}</h3>
    <div class="my-1">Thời gian khởi hành: {{ tourTime }}</div>
    <div class="my-1">Địa điểm khởi hành: TP.Hồ Chí Minh</div>
    <div class="my-1">Số chỗ còn lại: {{ tourSlot }}</div>
    <h4 class="my-1 fw-bold">Lịch trình:</h4>

    <b-table bordered :fields="header" :items="schedule"></b-table>
    <!-- <h5 class="fs-5 my-1 ms-2">Ngày thứ {{ detail.nthDay }}:</h5>
            <ul>s
                <li class="my-1">
                    Thời gian: {{ detail.startTime }} - {{ detail.endTime }}
                </li>
                <li class="my-1">Địa điểm tham quan: {{ detail.visitAttraction }}</li>
                <li class="my-1">Mô tả địa điểm: {{ detail.description }}</li>
            </ul> -->
  </b-modal>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue"

const tourName = ref("Tour du lịch Cao Bằng 2 ngày 1 đêm")
const tourTime = ref("08:00 - 03/08/2022")
const tourSlot = ref(5)

const header = ref([
  {
    key: "ngày_thứ",
    label: "Ngày thứ",
    thStyle: { width: "8%" },
  },
  {
    key: "thời_gian_bắt_đầu",
    label: "Thời gian bắt đầu",
    thStyle: { width: "14%" },
  },
  {
    key: "thời_gian_kết_thúc",
    label: "Thời gian kết thúc",
    thStyle: { width: "14%" },
  },
  {
    key: "địa_điểm_tham_quan",
    label: "Địa điểm tham quan",
    thStyle: { width: "17%" },
  },
  {
    key: "mô_tả",
    label: "Mô tả",
  },
])
const schedule = ref([
  {
    ngày_thứ: 1,
    thời_gian_bắt_đầu: "14:00",
    thời_gian_kết_thúc: "21:00",
    địa_điểm_tham_quan: "Sông Năng - Hồ Ba Bể",
    mô_tả:
      "Đoàn lên thuyền tiếp tục xuôi dòng sông Năng vào hồ Ba Bể (quý khách mang theo toàn bộ hành lí và tư trang cá nhân lên thuyền)",
  },
  {
    ngày_thứ: 2,
    thời_gian_bắt_đầu: "7:30",
    thời_gian_kết_thúc: "21:00",
    địa_điểm_tham_quan: "Thác Bản Giốc - Động Ngườm Ngao",
    mô_tả:
      "Đến Bản Giốc quý khách dùng bữa trưa tại nhà hàng với những món ăn đặc sắc của vùng miền, sau bữa trưa quý khách tiếp tục hành trình tham quan thác thác Bản Giốc có độ cao 53m, chia làm 3 tầng được coi là thác đẹp nhất Việt Nam và là thác lớn nhất Đông Nam Á. Thác cũng là nơi giáp ranh với nước bạn Trung Hoa với cột mốc chủ quyền thiêng liêng của Tổ Quốc. Tiếp tục hành trình, Quý khách thăm Động Ngườm Ngao – một trong những động dài và đẹp nhất Việt Nam với nhiều truyền thuyết phong phú của dân tộc Tày, thăm động Ngườm Ngao với vô vàn những măng đá, nhũ đá đẹp mắt.",
  },
  {
    ngày_thứ: 3,
    thời_gian_bắt_đầu: "7:30",
    thời_gian_kết_thúc: "21:00",
    địa_điểm_tham_quan: "Thác Bản Giốc - Động Ngườm Ngao",
    mô_tả:
      "Đến Bản Giốc quý khách dùng bữa trưa tại nhà hàng với những món ăn đặc sắc của vùng miền, sau bữa trưa quý khách tiếp tục hành trình tham quan thác thác Bản Giốc có độ cao 53m, chia làm 3 tầng được coi là thác đẹp nhất Việt Nam và là thác lớn nhất Đông Nam Á. Thác cũng là nơi giáp ranh với nước bạn Trung Hoa với cột mốc chủ quyền thiêng liêng của Tổ Quốc. Tiếp tục hành trình, Quý khách thăm Động Ngườm Ngao – một trong những động dài và đẹp nhất Việt Nam với nhiều truyền thuyết phong phú của dân tộc Tày, thăm động Ngườm Ngao với vô vàn những măng đá, nhũ đá đẹp mắt.",
  },
])
</script>

<style lang="scss" scoped>
* {
  font-family: "Quicksand", sans-serif;
}
</style>
