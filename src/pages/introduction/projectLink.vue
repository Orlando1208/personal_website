<template>
  <!-- <div id="shadow" class="animate__animated animate__slideInUp animate__faster"></div> -->
  <div id="shadow">
    <p>Here is some description about this project,here is some description about this project,here is some description about this project</p>
    <div class="btn"><el-button :icon="Link">Visit</el-button></div>
  </div>
</template>

<script>
import {Link} from '@element-plus/icons-vue'
export default {
    setup(){
        return {Link}
    }
}
</script>

<style scoped>

    #shadow{
        background-color: rgba(0,0,0,0.8);
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    p{
        text-align: left;
        margin: 20px;
        font-family: "Roboto";
        font-weight:500;
    }
    .btn{
        text-align: left;
        margin: 20px;
    }
    @font-face {
        font-family: "Roboto";
        src: url("../../assets/fonts/roboto-font/RobotoBold-Xdoj.ttf")
    }
</style>