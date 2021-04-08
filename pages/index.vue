<template>
  <div class="container">
    <Logo />
    <div class="main">
      <p class="title">当前页：index</p>
      <el-button type="primary" @click="$router.push('/item/5')">跳转item</el-button>
      <!-- <nuxt-link to="/item/5">跳转item</nuxt-link> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
}
.title {
  margin-top: 20px;
	font-size: 20px;
	font-weight: bold;
}
</style>
