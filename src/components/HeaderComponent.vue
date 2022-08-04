<template>
  <header>
    <div id="left">PCK BUS TRAVEL</div>
    <div id="right">
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item href="#">Tour</b-nav-item>
          <b-nav-item href="#">Thanh toán </b-nav-item>
          <div>
            <img src="@/assets/user.png" alt="" />
            <b-nav-item-dropdown
              class="text-decoration-none"
              text="Tài khoản"
              menu-class="w-100"
              right
            >
              <b-dropdown-item href="#">Thông tin cá nhân</b-dropdown-item>
              <b-dropdown-item href="#">Lịch sử đặt tour</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item href="#">Đăng xuất</b-dropdown-item>
            </b-nav-item-dropdown>
          </div>
        </b-navbar-nav>
      </b-navbar>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from "vue"
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  font-weight: bolder;

  div#left {
    width: 72%;
    padding-left: 40px;
    font-size: 28px;
  }

  > div#right {
    width: 28%;
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 20px !important;
    cursor: pointer;

    b-navbar {
      width: 100%;
      list-style-type: none;

      > b-navbar-nav {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;

        > li.nav-item:nth-child(1) {
          width: 20%;
          display: flex;
          justify-content: center;
        }

        > li.nav-item:nth-child(2) {
          width: 38%;
          display: flex;
          justify-content: center;
        }

        > div:nth-child(3) {
          width: 140px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          // padding-left: 10px;

          img {
            width: 25px;
            height: 25px;
          }

          .nav-item.dropdown {
            list-style-type: none;
          }
        }
      }
    }
  }
}
</style>
