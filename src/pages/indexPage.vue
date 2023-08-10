<template>
    <router-view></router-view>
</template>

<script>
import router from '../router/index'
import{provide} from 'vue'
export default {
  name: 'indexPage',
  components: {
  },
  setup(){
    router.push('/start')
    const swichToIntroducePage=()=>{
        router.push('/introduction')
    }
    provide('swichToIntroducePage',swichToIntroducePage)
  }
}
</script>

<style scoped>

</style>
