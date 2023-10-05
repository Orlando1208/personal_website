<template>
<div class="content">
    <div class="column" v-for="pset in resources">
        <div class="d" v-for="res in pset">
            <projectLink class="shadow"/>
            <img :src="res" alt="">
        </div>
  </div>
</div>
</template>

<script>
import { onBeforeMount, reactive } from 'vue'
import projectLink from './projectLink.vue'
export default {
  components: { projectLink },
    setup(){
        // let publicURL= process.env.BASE_URL
        let base="../../assets/imgs/"
        // let base="assets/imgs/"
        let resources=reactive([])
        onBeforeMount(()=>{
            // resources.push([base+"pexelsphoto193355.jpeg",base+"pexelsphoto807817.jpeg",base+"pexelsphoto1123982.jpeg"])
            // resources.push([base+"pexelsphoto2114972.jpg",base+"pexelsphoto3469702.jpeg",base+"pexelsphoto3551711.jpeg"])
            resources.push([require("../../assets/imgs/"+"pexelsphoto193355.jpeg"),require("../../assets/imgs/"+"pexelsphoto807817.jpeg"),require("../../assets/imgs/"+"pexelsphoto1123982.jpeg")])
            resources.push([require("../../assets/imgs/"+"pexelsphoto2114972.jpg"),require("../../assets/imgs/"+"pexelsphoto3469702.jpeg"),require("../../assets/imgs/"+"pexelsphoto3551711.jpeg")])
            resources.push([require("../../assets/imgs/"+"pexelsphoto2114972.jpg"),require("../../assets/imgs/"+"pexelsphoto3469702.jpeg"),require("../../assets/imgs/"+"pexelsphoto3551711.jpeg")])
        })
        return{base,resources}
    }
}
</script>

<style scoped>
.content {
  display: flex;
  width: 1200px;
}
.column {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 5px;
}
.column:last-child {
  margin-right: 0;
}
.content div {
  margin-bottom: 5px;
  color: white;
}
.d{
    position: relative;
    overflow: hidden;
}
.shadow{
    /* display: none; */
    font-family:"Roboto" sans-serif;
    font-size: 20px;
    position: absolute;
    top: 100%;
    transition: transform .4s;
}
.d:hover .shadow{
    display: block;
    transform: translateY(-100%);
}
.d img{
    max-width: 100%;
    height: auto;
}
    @font-face {
        font-family: "Roboto";
        src: url("../../assets/fonts/roboto-font/RobotoThin-xjmK.ttf")
    }
</style>