<template>
  <headerVue class="fix"/>
  <router-view></router-view>
</template>

<script>
import headerVue from './header.vue'
import router from '../../router/index'
import{provide} from 'vue'
export default {
  components: { headerVue },
  setup(){
    router.push('/private/imageWall')
    const swichToImageWallPage=()=>{
        router.push('/private/imageWall')
    }
    const swichToDiaryPage=(val=1)=>{
      router.push({path:'/private/diary',query:{page:val}})
    }
    const swichToBigDiary=(id,fromPage,title)=>{
      // console.log('val',val)
      router.push({path:'/private/bigDiary',query:{id:id,fromPage:fromPage,title:title}})
    }
    provide('swichToImageWallPage',swichToImageWallPage)
    provide('swichToDiaryPage',swichToDiaryPage)
    provide('swichToBigDiary',swichToBigDiary)
  }
}
</script>

<style scoped>

</style>