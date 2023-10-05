<template>
  <imageDisplayer v-if="imageDisplayerShow" @closeBigImg="closeBigImg" :src="bigImgSrc"/>
  <images/>
</template>

<script>
import imageDisplayer from './imageDisplayer.vue'
import images from './images.vue'
import {ref,provide} from 'vue'
export default {
  components:{images,imageDisplayer},
  setup(props) {
    let bigImgSrc=ref("")
    let imageDisplayerShow=ref(false)
    let closeBigImg=()=>{
      imageDisplayerShow.value=false
    }
    let openBigImg=(src)=>{
      imageDisplayerShow.value=true
      bigImgSrc.value=src
    }
    provide("openBigImg",openBigImg)
    return{imageDisplayerShow,closeBigImg,bigImgSrc}
  }
}
</script>

<style>

</style>