<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6" v-for="tour in paginatedTours" :key="tour.id">
        <div class="tour-card" @click="goToPurchasePage(tour.id)">
          <img :src="tour.image" class="tour-image"/>
          <div class="tour-description">{{ tour.description }}</div>
        </div>
      </el-col>
    </el-row>
    <el-pagination
        @current-change="handlePageChange"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="tours.length">
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
      tours: [], // 这里应该是从服务器获取的旅游项目列表
      currentPage: 1,
      pageSize: 4
    }
  },
  computed: {
    paginatedTours() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.tours.slice(start, end);
    }
  },
  methods: {
    handlePageChange(newPage) {
      this.currentPage = newPage;
    },
    goToPurchasePage(tourId) {
      // 实现跳转到购买页面的逻辑
      // this.$router.push(`/purchase-tour/${tourId}`);
    }
  }
}
</script>

<style>
.tour-card {
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.tour-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
}

.tour-image {
  width: 100%;
  height: auto;
  display: block;
}

.tour-description {
  /* 样式 */
}
</style>
