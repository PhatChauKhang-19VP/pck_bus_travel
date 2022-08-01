<template>
  <header>
    <div id="left">PCK BUS TRAVEL</div>
    <div id="right">
      <div class="mx-2">
        <a>Tour</a>
        <div class="slider"></div>
      </div>
      <div class="mx-2">
        <a>Thanh toán</a>
        <div class="slider"></div>
      </div>
      <div>
        <img src="@/assets/user.png" alt="" />
        <div>Tài khoản</div>
        <img src="@/assets/arrow-down.png" alt="" />
      </div>
    </div>
  </header>
</template>

<script lang="ts"></script>

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

    .slider {
      width: 100%;
      height: 3px;
      background-color: #0d6efd;
    }

    > div:nth-child(1) > a {
      width: 15%;
    }

    > div:nth-child(2) > a {
      width: 40%;
      text-align: center;
    }

    div:nth-child(3) {
      width: 150px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-left: 5px;

      div {
        width: fit-content;
        padding-left: 5px;
      }

      img {
        width: 25px;
        height: 25px;
      }
    }
  }
}
</style>
