<template>
  <el-card shadow="hover"  id="page">
    <!-- <div> -->
        <h2>{{title}}</h2>
        <p id="description">
            {{desc}}
        </p>
    <!-- </div> -->
  </el-card>

</template>

<script>
import {ref} from 'vue'
export default {
    props:['title',"desc"],
    setup(props,context){
    }
}
</script>

<style scoped>
#page{
position: relative;
  width: 500px;
  height: 130px;
  margin-bottom: 5px;
  cursor: pointer;
}
#description{
    width: 480px;
    height: 60px;
    line-height: 20px;
    position: absolute;
    left: 50%;
    bottom: 10px;
    transform: translate(-50%,0);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
</style>