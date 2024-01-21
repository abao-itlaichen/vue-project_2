<template>
    <el-container>
        <el-header>
            <el-row align="middle" class="header-row">
                <!-- Logo 列 -->
                <el-col :span="2">
                    <img src="src/assets/img_3.png" class="logo"/>
                </el-col>

                <!-- 搜索框列，使用 offset 来设置与 Logo 的间距 -->
                <el-col :span="5" :offset="1">

                    <el-input placeholder="搜索..." class="search-input"></el-input>
                </el-col>

                <!-- 注册和登录按钮列，使用 offset 来设置与搜索框的间距 -->
                <el-col :span="14" :offset="2" class="header-buttons">

                    <el-button type="text" @click="goToLogin"><el-icon><Position/></el-icon>注册/登录</el-button>
                </el-col>
            </el-row>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu default-active="/" class="el-menu-vertical-demo">
                    <el-menu-item index="/">
                        <el-icon ><HomeFilled/></el-icon>
                        <router-link to="/" class="link">首页</router-link>
                    </el-menu-item>
                    <el-menu-item index="/region">
                      <el-icon><Location/></el-icon>
                        <router-link to="/region" class="link">区域情况</router-link>
                    </el-menu-item>
                    <el-menu-item index="/products">
                      <el-icon><Grape/></el-icon>
                        <router-link to="/products" class="link">生态产品</router-link>
<!--                        生态资源、特色产品、生态旅游-->
                    </el-menu-item>

                    <el-menu-item index="/data">
                      <el-icon><TrendCharts/></el-icon>
                        <router-link to="/" class="link">
                            <div class="special">
                                GEP大数据平台
                            </div>
                        </router-link>
                    </el-menu-item>

                    <el-menu-item index="/products">
<!--                        <el-icon><Grape/></el-icon>-->
                        <router-link to="/products" class="link">
                            关于我们
                        </router-link>

<!--                        平台介绍、交易制度、留言板-->

                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <!-- 子路由的内容将在这里渲染 -->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import {Grape, HomeFilled, House, Location, Position, Search, TrendCharts} from "@element-plus/icons-vue";

export default {
  components: {Search, Position, TrendCharts, Grape, Location, HomeFilled, House},
    methods: {

        goToLogin() {
            this.$router.push('/login');
        }

    }
};
</script>

<style scoped lang="scss">
.el-container {
    margin: 0 auto;
    width: 1466px;

}

.el-header {
    background-color: #545c64;
    font-size: 40px;
    font-weight: 700;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
    .header-row {
        height: 100%;
    }

    .logo {
        width: 80%; /* 根据实际情况调整 */
        height: auto;
    }

    .search-input {
      margin-bottom: 10px;
        width: 100%;
        border-radius: 60px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }

    .header-buttons {
        text-align: right;

        .el-button {
            margin-left: 10px;
          margin-bottom: 10px;
            color: white;
          font-size: 20px;
            &:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            }
        }
    }
}

.el-aside {
    //position: fixed;
    //z-index: 100;

    background-color: rgb(52,73,94);
    height: 600px;
    width:150px;

  .el-icon{
    font-size: 30px;
    color: rgb(221,221,221);
  }
    .el-menu-vertical-demo {
        border: none;
        background-color: rgb(52,73,94);

        .el-menu-item {
            margin-top: 32px;
            font-size: 21px;

            display: flex;
            align-items: center;
            justify-content: center;

            .link {
                text-decoration: none;
                color: rgb(221,221,221);

                .special {
                    font-size: 16px;
                    display: flex;
                    flex-wrap: wrap;
                }
            }
            .link:hover {
                transition: 1s;
                font-size: 24px;
                font-weight: 700;
                color: rgb(52,73,94);

            }
        }


    }
}
</style>
