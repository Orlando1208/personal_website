<template>
    <div class="largeImg">
        <div class="header"><span>ECH</span><span style="font-weight: 500;font-family: normal;">o</span></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .largeImg{
        width: 100%;
        height: 400px;
        background-image: url('../../assets/imgs/pexelsphoto3648850.jpeg');
        color: white;
        font-size: 9.375rem;
        text-transform: uppercase;
        font-weight: 10;
        font-family: "Raleway";
    }
    .header{
        width: 420px;
        height: 250px;
        position: relative;
          left: 50%;
          height: 50%;
        transform: translate(-50%,50%);
    }
    @font-face {
  font-family: "Raleway";
  src: url("../../assets/fonts/Raleway/static/Raleway-Thin.ttf")
}
</style>