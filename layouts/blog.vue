<template>
  <div class="blog">
    <div class="title">我的博客导航栏在这里</div>
    <nuxt />
  </div>
</template>

<script lang="ts">
	import Vue from "vue";
	export default Vue.extend({
		middleware: 'test'
	})
</script>

<style>
	.title {
		text-align: center;
		font-size: 30px;
		font-weight: bold;
	}
</style>
