import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainLayout from '../views/MainLayout.vue'
import RegionView from '../views/RegionView.vue'
import EcologicalProducts from "@/views/EcologicalProducts.vue";
import AgriculturalProducts from "@/views/AgriculturalProducts.vue";
import Ecotourism from "@/views/Ecotourism.vue";
import Login from "@/views/Login.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: MainLayout,
            children: [
                {
                    path: '', // 默认子路由
                    name: 'Home',
                    component: HomeView,
                },
                {
                    path: 'region', // 子路由
                    name: 'Region',
                    component: RegionView,
                },
                {
                    path:'products',
                    name:'Products',
                    component: EcologicalProducts,
                },
                {
                    path:'agricultural',
                    name:'Agricultural',
                    component:AgriculturalProducts
                },
                {
                    path:'ecotourism',
                    name:'Ecotourism',
                    component:Ecotourism
                },
                {
                    path:'login',
                    name:'Login',
                    component:Login
                }
            ]
        },
    ]
})

export default router
