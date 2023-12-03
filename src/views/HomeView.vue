<template>
    <div class="common-layout">
        <el-container>
            <el-container>
                <el-main>
                    <div class="top-mes">
                        <!-- 轮播图部分 -->
                        <div class="carousel-container">
                            <el-carousel interval="5000" height="400px" autoplay>
                                <el-carousel-item v-for="i in 3" :key="i">
                                    <img :src="`src/assets/map_right${i}.jpeg`" alt="轮播图">
                                </el-carousel-item>
                            </el-carousel>
                        </div>

                        <div class="right">
                            <div class="title">基础信息统计</div>
                            <hr>
                            <div class="info">
                                <div class="inner-left">
                                    生态资源
                                </div>
                                <div class="inner-right">
                                    生态产品
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="map-show">
                        <div class="map-left">
                            <img src="src/assets/map_left1.jpeg">
                            <img src="src/assets/map_left2.webp">
                            <img src="src/assets/map_left3.webp">
                        </div>
                        <div class="map-center">
                            <img src="src/assets/map_center.png" width="800" height="450">
                        </div>
                        <div class="map-right">
                            <img src="src/assets/map_right1.jpeg">
                            <img src="src/assets/map_right2.jpeg">
                            <img src="src/assets/map_right3.jpeg">

                        </div>
                    </div>


                    <div class="top">
                        <div class="button">
                            <ul>
                                <li>
                                    <el-button type="text" class="custom-button" @click="showTradeableResources">
                                        可交易资源
                                    </el-button>
                                </li>
                                <li>
                                    <el-button type="text" class="custom-button" @click="showTradedResources">
                                        已交易资源
                                    </el-button>
                                </li>
                                <li>
                                    <el-button type="text" class="custom-button" @click="showTradedResources">
                                        注册资源
                                    </el-button>
                                </li>
                                <li>
                                    <el-button type="text" class="custom-button" @click="showTradedResources">
                                        办理状态
                                    </el-button>
                                </li>
                                <li>
                                    <el-button type="text" class="custom-button" @click="goToProducts">
                                        生态产品
                                    </el-button>
                                </li>
                                <li>
                                    <el-button type="text" class="custom-button" @click="showTradedResources">
                                        账户管理
                                    </el-button>
                                </li>
                            </ul>
                        </div>

                        <div class="right">
                            <div class="title">基础信息统计</div>
                            <hr>
                            <div class="info">
                                <div class="inner-left">
                                    生态资源
                                </div>
                                <div class="inner-right">
                                    生态产品
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bottom">
                        <div class="map">
                            <img src="src/assets/map_center.png" width="1000" height="600">
                            <div class="info">
                                <img src="src/assets/map_right2.jpeg" alt="" width="340">
                                <span class="special">地区编号 @XXXX</span>
                                <ul>
                                    <li>面积：111.3亩</li>
                                    <li>报价：6800元/年</li>
                                    <li>联系人：老王</li>
                                </ul>

                                <el-steps
                                    :active="2" finish-status="success" style="margin-top: 20px"
                                    simple space="50%"
                                >
                                    <el-step title="填报完成" />
                                    <el-step title="管理员审核中" />
                                    <el-step title="管理员审核完毕" />
                                    <el-step title="等待用户选择交易方式" />
                                    <el-step title="进入资源市场" />
                                    <el-step title="..." />

                                </el-steps>



                            </div>
                        </div>

                    </div>
                </el-main>
            </el-container>
        </el-container>

        <!-- 弹窗组件 -->
        <el-dialog :visible.sync="isTradeableDialogVisible" title="可交易资源">
            <!-- 这里放置可交易资源的图片和介绍 -->

        </el-dialog>
        <el-dialog :visible.sync="isTradedDialogVisible" title="已交易资源">
            <!-- 这里放置已交易资源的图片和介绍 -->
        </el-dialog>
    </div>
</template>

<script lang="ts">
import {ElButton, ElCarousel, ElCarouselItem, ElDialog} from 'element-plus';
import { Edit, Picture, UploadFilled } from '@element-plus/icons-vue'


export default {
    components: {
        ElButton,
        ElDialog,
        ElCarousel,
        ElCarouselItem
    },
    data() {
        return {
            isTradeableDialogVisible: false,
            isTradedDialogVisible: false
        };
    },
    methods: {
        showTradeableResources() {
            this.isTradeableDialogVisible = true;
        },
        showTradedResources() {
            this.isTradedDialogVisible = true;
        },
        goToProducts() {
            this.$router.push('/Products')
        }
    }
};

const activities = [
    {
        content: 'Event start',
        timestamp: '2018-04-15',
    },
    {
        content: 'Approved',
        timestamp: '2018-04-13',
    },
    {
        content: 'Success',
        timestamp: '2018-04-11',
    },
]
</script>

<style scoped lang="scss">

.custom-button {
    width: 200px;
    height: 80px;
    margin: 10px;
    font-size: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    color: black;
    //box-shadow: 3px 3px 2px 3px gainsboro;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }


}

.el-main {
    background-color: white;
    position: relative; // 添加相对定位以便放置轮播图
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); //渐变背景

    .top-mes {
        display: flex;

        .carousel-container {
            width: 50%; // 宽度为父容器的25%
            height: 400px;
            //position: absolute; // 使用绝对定位
            top: 0;
            left: 0;
            z-index: 10; // 确保轮播图在其他内容之上

            .el-carousel {
                width: 100%;
                height: 100%;
            }

            .el-carousel-item img {
                width: 100%;
                height: 100%;
                object-fit: cover; // 图片覆盖整个区域

            }
        }
    }



    .map-show {
        display: flex; /* 使用flex布局使子元素横向排列 */
        align-items: stretch; /* 确保所有子元素填满容器的高度 */
        margin-top: 30px;
        margin-bottom: 60px;

        padding: 5px;

        .map-left, .map-right {
            display: flex; /* 使用flex布局 */
            flex-direction: column; /* 确保子元素竖向排列 */
            justify-content: space-between; /* 分布子元素 */

            width: 220px;
        }

        .map-center {
            //display: flex; /* 使用flex布局 */
            justify-content: center; /* 居中子元素 */
            align-items: center; /* 居中子元素 */

            width: 800px;
            height: 400px;
        }
    }


    .top {
        display: flex;

        .button {
            width: 700px;

            ul {
                display: flex;
                flex-wrap: wrap;
                padding-left: 4%;

                li {
                    width: 200px;
                    height: 80px;
                    margin: 7px;
                    font-size: 26px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border-radius: 20px;
                    box-shadow: 3px 3px 2px 3px gainsboro;
                }

                li:nth-child(1) {
                    background-color: yellow;
                }

                li:nth-child(2) {
                    background-color: orange;
                }

                li:nth-child(3) {
                    background-color: gainsboro;
                }

                li:nth-child(4) {
                    background-color: cornflowerblue;
                }

                li:nth-child(5) {
                    background-color: rgb(186, 74, 242);
                }

                li:nth-child(6) {
                    background-color: lightpink;
                }

            }
        }

    }

    .right {
        box-sizing: border-box;
        margin-left: 50px;
        border: 1px blue dotted;
        border-radius: 20px;
        padding: 20px;
        width: 500px;
        height: 200px;
        font-size: 20px;

        .info {
            display: flex;
            justify-content: space-between;
        }

    }

    .bottom {
        box-sizing: border-box;
        margin-top: 60px;
        height: 700px;

        .map {
            //background-color: #fff;

            display: flex;
            
            .info {
                margin-left: 20px;
                padding: 10px;
                background-color: #8e9aaf;
                width: 400px;
                border: 1px lightyellow solid;
                box-shadow: 2px 2px 4px 2px navajowhite;
                border-radius: 20px;

                img {
                    border-radius: 30px;
                    margin-bottom: 30px;
                }


                .special {
                    background-color: orange;
                    padding: 10px;
                    border-radius: 20px;
                    margin-left: 10px;
                    font-size: 24px;
                    font-weight: 700;
                }

                li {
                    list-style: none;
                    font-size: 20px;
                }

            }
        }
    }
}

</style>