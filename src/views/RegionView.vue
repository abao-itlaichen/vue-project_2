<template>
  <div class="container">
    <div class="images">
      <div class="picture"><img src="src/assets/imgMap.png" width="100%" height="300"></div>
      <div class="picture"><img src="src/assets/imgMap.png" width="100%" height="300"></div>
    </div>
    <div class="descriptions">
      <div class="description">介绍 1</div>
      <div class="description">介绍 2</div>
    </div>
  </div>
</template>

<script>


</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: start;
  background-image: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);
}

.images, .descriptions {
  flex: 1;
}

.picture, .description {
  margin-bottom: 20px; // 根据需要调整间距
}

.picture {
  background-color: aquamarine;
  width: 100%; // 图片区域宽度
  height: 300px; // 图片区域高度
  // 其他图片样式...
}

.description {
  // 描述区域的样式...
}


</style>