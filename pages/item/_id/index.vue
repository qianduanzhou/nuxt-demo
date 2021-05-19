<template>
	<div class="item">
    <p class="item-title">当前页：{{name}}</p>
    <!-- <nuxt-link to="/">index</nuxt-link> -->
    <el-button type="primary" @click="$router.push('/')">跳转index</el-button>
    <p v-if="$fetchState.pending">加载中...</p>
    <p v-else-if="$fetchState.error">加载错误</p>
    <p v-else>加载完成</p>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  layout: "blog",
	middleware: 'test',
  data() {
    return {
      show: false
    }
  },
  async asyncData({params}: {params: any}): Promise<object> {
    let promise = new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 3000);
    })
    await promise
		console.log("asyncData");
    if(!process.server) {
      console.log('process.server', process.server)
      console.log('asyncData-documnet', document)
    }
    let result: object = {
      name: "item",
			id: params.id
    };
    return result;
  },
  async fetch(): Promise<void> {
    console.log("fetch");
    let promise = new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        console.log("fetch");
        resolve()
      }, 3000);
    })
    await promise
  },
  beforeCreate(): void {
    // console.log('beforeCreate-documnet', document)
    console.log("beforeCreate");
  },
  created(): void {
    console.log("created");
  },
  beforeMount(): void {
    // console.log('beforeMount-documnet', document)
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
