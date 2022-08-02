<template>
  <TheHeader />
  <div id="mainContent">
    <TheSidebar />
    <div id="cardGroup">
      <TheSearchResult class="mx-3 mb-3" :test-prop="['phat', 'chau']" />
      <TheCard class="mx-3" />
      <TheCard class="mx-3" />
      <TheCard class="mx-3" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TheHeader from "@/components/HeaderComponent.vue" // @ is an alias to /src
import TheSidebar from "@/components/SidebarComponent.vue"
import TheCard from "@/components/CardComponent.vue"
import TheSearchResult from "@/components/SearchResultComponent.vue"
import { reactive, ref } from "vue"

const searchResults = ref<string[]>(["orange", "blue", "yellow"])
</script>

<style lang="scss" scoped>
#mainContent {
  display: inline-block;
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 5px;
}

#cardGroup {
  display: inline-block;
  width: fit-content;
  position: absolute;
  left: 300px;
  top: 5px;
}
</style>
