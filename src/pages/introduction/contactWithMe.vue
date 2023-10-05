<template>
  <div id="main">
    <div class="column">
        <div class="item">
            <h1 class="Contact">Contact with me</h1>
        </div>
        <div class="item">
            <div class="baseInfo">
                <div class="icon">
                    <el-icon><Location /></el-icon>
                </div>
                <h3 class="title">MY ADDRESS</h3>
                <div class="info">
                    121 Rock Sreet, 21 Avenue, New York, NY 92103-9000
                </div>
            </div>
        </div>
    </div>
    <div class="column">
        <div class="item">
            <div class="baseInfo">
                <div class="icon">
                    <el-icon><Iphone /></el-icon>
                </div>
                <h3 class="title">MY PHONE</h3>
                <div class="info">
                    1 (234) 567-891, 1 (234) 987-654
                </div>
            </div>
        </div>
        <div class="item">
            <div class="baseInfo">
                <div class="icon">
                    <el-icon><Message /></el-icon>
                </div>
                <h3 class="title">MY EMAIL</h3>
                <div class="info">
                    121832607ECHO@gmail.com
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #main{
        margin-left: 0px;
        font-family: "Roboto";
        display: flex;
        width: 100%;
        height: 500px;
        background-color:black;
    }
    .Contact{
        height: 160px;
        width: 400px;
        line-height: 80px;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-size: 60px;
    }
    .column {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-right: 5px;
        color: white;
    }
    .column:last-child {
        margin-right: 0;
    }
    .item{
        position: relative;
        width: 100%;
        height: 50%;
        /* border: 1px solid white; */
    }
    .baseInfo{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .icon{
        font-size: 60px;
        width: 100%;
    }
    .title{
        width: 100%;
        display: block;
    }
    .info{
        font-size: 20;
    }
    @font-face {
        font-family: "Roboto";
        src: url("../../assets/fonts/roboto-font/RobotoThin-xjmK.ttf")
    }
</style>