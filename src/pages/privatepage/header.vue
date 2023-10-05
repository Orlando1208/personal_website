<template>
  <div id="header">
    <div id="ECHO">ECHO</div>
    <div id="imgWall" @click="visitImage">Image Wall</div>
    <div id="Diary" @click="visitDiary">Diary&Note</div>
    <div id="social">
        <a href="https://www.twitter.com">
            <img src="../../assets/imgs/icons8-twitter.svg" alt="" class="icon">
        </a>
        <a href="https://www.facebook.com" id="facebook">
            <img src="../../assets/imgs/icons8-facebook.svg" alt="" class="icon">
        </a>
        <a href="https://www.instagram.com/" id="instagram">
            <img src="../../assets/imgs/icons8-instagram.svg" alt="" class="icon">
        </a>
    </div>
  </div>
</template>

<script>
import {inject} from "vue"
export default {
    setup(){
        const swichToImageWallPage=inject('swichToImageWallPage')
        const swichToDiaryPage=inject('swichToDiaryPage')
        let visitImage=()=>{
            swichToImageWallPage()
        }
        let visitDiary=()=>{
            swichToDiaryPage()
        }
        return{visitImage,visitDiary}
    }
}
</script>

<style scoped>
 #header{
    width: 100%;
    height: 50px;
    background-color: rgb(255, 255, 255);
    /* position: fixed; */
    z-index: 999;
    /* border-bottom:1px solid rgb(181, 181, 181); */
 }
 #ECHO{
    float: left;
    width: 150px;
    height: 100%;
    /* margin-left:20px ; */
    font-family: "autumn-flowers";
    line-height: 50px;
    text-align: center;
    font-size: 40px;
    margin-right:10px ;
    box-sizing: border-box;
    padding-top: 10px;
    padding: 5px;
 }
 #imgWall{
    float: left;
    width: 150px;
    height: 100%;
    line-height: 40px;
    padding: 5px;
    margin-left:10px ;
    margin-right:10px ;
    text-align: center;
    box-sizing: border-box;
    /* border-left: 1px solid rgb(181, 181, 181); */
    font-family: "Raleway";
    font-size: 20px;
    cursor: pointer;
 }
#Diary{
    float: left;
    width: 150px;
    height: 100%;
    line-height: 40px;
    padding: 5px;
    margin-left:10px ;
    font-size: 20px;
    text-align: center;
    box-sizing: border-box;
    /* border-left: 1px solid rgb(181, 181, 181);
    border-right: 1px solid rgb(181, 181, 181); */
    font-family: "Raleway";
    cursor: pointer;
 }
 #Diary:hover{
    background-color: #d5d5d5;
 }
#imgWall:hover{
    background-color: #d5d5d5;
 }
@font-face {
  font-family: "autumn-flowers";
  src: url("../../assets/fonts/autumn-flowers-font/AutumnFlowers-9YVZK.otf")
}
@font-face {
  font-family: "Raleway";
  src: url("../../assets/fonts/Raleway/static/Raleway-Light.ttf")
}
#social{
    float: right;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 50px;
}
.icon{
    width: 30px;
    height: 30px;
    margin-left:5px ;
    margin-right: 5px;
}
</style>