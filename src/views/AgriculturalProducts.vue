<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6" v-for="product in paginatedProducts" :key="product.id">
        <div class="product-card" @click="goToPurchasePage(product.id)">
          <img :src="product.image" class="product-image"/>
          <div class="product-name">{{ product.name }}</div>
          <!-- 其他产品信息 -->
        </div>
      </el-col>
    </el-row>
    <el-pagination
        @current-change="handlePageChange"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="products.length">
    </el-pagination>
  </div>
</template>

<script>
import { ElRow, ElCol, ElPagination } from 'element-plus'

export default {
  components: {
    ElRow,
    ElCol,
    ElPagination
  },
  data() {
    return {
      products: [], // 这里应该是从服务器获取的产品列表
      currentPage: 1,
      pageSize: 4
    }
  },
  computed: {
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.products.slice(start, end);
    }
  },
  methods: {
    handlePageChange(newPage) {
      this.currentPage = newPage;
    },
    goToPurchasePage(productId) {
      // 实现跳转到购买页面的逻辑
      // this.$router.push(`/purchase/${productId}`);
    }
  }
}
</script>

<style>
.product-card {
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
}

.product-image {
  width: 100%;
  height: auto;
  display: block;
}

.product-name {
  /* 样式 */
}
</style>
