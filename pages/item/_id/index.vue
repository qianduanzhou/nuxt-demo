<template>
	<div class="item">
		<p class="item-title">当前页：{{name}}</p>
		<!-- <nuxt-link to="/">index</nuxt-link> -->
		<el-button type="primary" @click="$router.push('/')">跳转index</el-button>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  layout: "blog",
	middleware: 'test',
  asyncData({params}: {params: any}): object {
		console.log("asyncData");
		console.log('item-params', params)
    let result: object = {
      name: "item",
			id: params.id
    };
    return result;
  },
  fetch(): void {
    console.log("fetch");
  },
  beforeCreate(): void {
    console.log("beforeCreate");
  },
  created(): void {
    console.log("created");
  },
  beforeMount(): void {
    console.log("beforeMount");
  },
  mounted(): void {
    console.log("mounted");
  }
});
</script>

<style>
.item {
	width: 100%;
	display: flex;
	margin-top: 20px;
	align-items: center;
	flex-direction: column;
}
.item-title {
	font-size: 20px;
	font-weight: bold;
}
</style>
