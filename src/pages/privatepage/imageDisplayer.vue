<template>
    <!-- <teleport to="body"> -->
        <div id="shadow">
            <div id="exit" @click="closeBtn">
                <el-icon><Close /></el-icon>
            </div>
            <!-- <div class="bigIMG"> -->
            <el-image  :src='src' fit="cover" />
            <!-- </div> -->
        </div>
    <!-- </teleport> -->
</template>

<script>
import {ref} from 'vue'
export default {
    props:['src'],
    setup(props,context){
        // let src=ref("https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg")
        const closeBtn=()=>{
            context.emit('closeBigImg')
        }
        let src=ref(props.src)
        // const setSrc=(newSrc)=>{
        //     src.value=newSrc
        // }
        // provide("setSrc",setSrc)\
        return {closeBtn,src}
    }
}
</script>

<style scoped>
    #shadow{
        height: 120%;
        width: 100%;
        background-color: rgba(77, 77, 77, 0.599);
        position: fixed;
        top: -50px;
        z-index: 3;
        /* cursor: pointer; */
    }
    #exit{
        width: 50px;
        height: 50px;
        position: relative;
        top: 70px;
        left: 20px;
        background-color: #565656;
        color: white;
        line-height: 50px;
        text-align: center;
        font-size: 50px;
        cursor: pointer;
    }
    .el-image{
        max-width: 100%;
        max-height:100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        /* cursor:default; */
    }
</style>