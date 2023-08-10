//该文件专门用于创造整个应用的路由器
import { createRouter,createWebHashHistory} from "vue-router";
import start from '../pages/startpage/indexPage.vue'
import introduction from '../pages/introduction/indexPage.vue'
//引入组件

//创建一个路由器
export default createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:'/start',
            component:start
        },
        {
            path:'/introduction',
            component:introduction
        },
    ]
})