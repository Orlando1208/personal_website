<template>
  <section class="u-align-center u-clearfix u-section-2" id="carousel_968c">
      <div class="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-sheet-1">
        <h5 class="u-text u-text-default u-text-1">Welcome</h5>
        <h2 class="u-text u-text-palette-5-base u-text-2"> Learn about my skills, education and profession. If you want to cooperate with me, please contact me</h2>
        <p class="u-text u-text-3">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
      </div>
      <!-- {{arr}} -->
    </section>
</template>

<script>

import {ref,inject} from 'vue'
export default {
    name:"Welcome",
    setup(){
        // const $axios=inject('$axios')
        // const getData=async()=>{
        //     let res=await $axios({url:"https://api.uomg.com/api/rand.qinghua"})
        //     console.log(res)
        //     return res.data.content
        // }
        // let arr=ref("")
        // getData().then(content=>{
        //     arr.value=content
        // })
        // return {arr}
    }
}
</script>

<style scoped>
.u-section-2 .u-sheet-1 {
  min-height: 502px;
}

.u-section-2 .u-text-1 {
    text-align: center;
    font-size: 1.25rem;
  letter-spacing: 2px;
  font-weight: 700;
  margin: 76px auto 0;
}

.u-section-2 .u-text-2 {
  font-size: 3rem;
  font-weight: 300;
    color: #b9c1cc;
    width: 721px;
    position: relative;
    left: 50%;
    transform: translate(-50%,0%);
    text-align: center;
}

.u-section-2 .u-text-3 {
  line-height: 2;
  width: 721px;
  font-style: normal;
  margin: 20px auto 60px;
}

@media (max-width: 1199px) {
  .u-section-2 .u-text-1 {
    width: auto;
    margin-top: 60px;
  }

  .u-section-2 .u-text-2 {
    width: 721px;
    margin-left: 110px;
    margin-right: 35px;
  }
}

@media (max-width: 991px) {
  .u-section-2 .u-text-2 {
    margin-left: 0;
    margin-right: 0;
    width: 720px;
  }

  .u-section-2 .u-text-3 {
    width: 720px;
  }
}

@media (max-width: 767px) {
  .u-section-2 .u-text-2 {
    width: 540px;
  }

  .u-section-2 .u-text-3 {
    width: 540px;
  }
}

@media (max-width: 575px) {
  .u-section-2 .u-sheet-1 {
    min-height: 619px;
  }

  .u-section-2 .u-text-2 {
    width: 340px;
    font-size: 2.25rem;
  }

  .u-section-2 .u-text-3 {
    width: 340px;
  }
}
</style>