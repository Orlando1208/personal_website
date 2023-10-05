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
    const swichToPrivatePage=()=>{
      router.push('/private')
    }
    provide('swichToIntroducePage',swichToIntroducePage)
    provide('swichToPrivatePage',swichToPrivatePage)
  }
}
</script>

<style scoped>

</style>
