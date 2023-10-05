//该文件专门用于创造整个应用的路由器
import { createRouter,createWebHashHistory} from "vue-router";
import start from '../pages/startpage/indexPage.vue'
import introduction from '../pages/introduction/indexPage.vue'
import privatePage from '../pages/privatepage/indexPage.vue'
import imageWall from '../pages/privatepage/imageWall.vue'
import diary from '../pages/privatepage/diary.vue'
import bigDiary from '../pages/privatepage/bigDiary.vue'
//引入组件

//创建一个路由器
export default createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:'/',
            component:start
        },
        {
            path:'/start',
            component:start
        },
        {
            path:'/introduction',
            component:introduction
        },
        {
            path:'/private',
            component:privatePage,
            children:[
                {
                    path:'imageWall',//子路由不加斜杠
                    component:imageWall
                },
                {
                    path:'diary',//子路由不加斜杠
                    component:diary,
                    props({query}){
                        return{page:query.page}
                    },
                    children:[
                        
                    ]
                },
                {
                    path:'bigDiary',
                    component:bigDiary,
                    props({query}){
                        return{id:query.id,fromPage:query.fromPage,title:query.title}
                        // return{id:1}
                    },
                }
            ]
        },
    ]
})