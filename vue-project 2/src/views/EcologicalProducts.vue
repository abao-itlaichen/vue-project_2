<template>
  <div class="button-container">
    <el-button type="primary" class="button-item" @click="goToFarmProducts">农产品页面</el-button>
    <el-button type="primary" class="button-item" @click="goToEcoTourism">生态旅游页面</el-button>
  </div>
</template>

<script>
import { ElButton } from 'element-plus'

export default {
  components: {
    ElButton
  },
  methods: {
    goToFarmProducts() {
      this.$router.push('/agricultural'); // 跳转到agriculture农产品页面
    },
    goToEcoTourism() {
      this.$router.push('/ecotourism'); // 假设 '/eco-tourism' 是生态旅游页面的路由
    }
  }
}
</script>

<style>
.button-container {
  display: flex;
  width: 100%;

}

.button-item {
  flex: 1;
  text-align: center;
  background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);
}
</style>
