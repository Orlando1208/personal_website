<template>
  <div id="main">
    <LargeBanner/>
    <Welcome/>
    <infoTitle/>
    <basicInfo class="center"/>
    <projectTitle/>
    <projectList class="center"/>
    <contactWithMe class="center" />
  </div>
</template>

<script>
import LargeBanner from './LargeBanner.vue'
import basicInfo from './basicInfo.vue'
import Welcome from './Welcome.vue'
import infoTitle from './infoTitle.vue'
import projectTitle from './projectTitle.vue'
import projectList from './projectList.vue'
import contactWithMe from './contactWithMe.vue'
export default {
  components: { basicInfo,LargeBanner,Welcome,infoTitle,projectTitle,projectList,contactWithMe},
  name:"indexPage",
}
</script>

<style scoped>
/* @import '../../assets/css/Home.css';
@import '../../assets/css/nicepage.css'; */
  #main{
    position: relative;
    margin: 0px;
  }
  #botton{
    position: relative;
    bottom: 0px;
  }
  .center{
    position: relative;
    left: 50%;
    transform: translate(-50%,0);
  }
</style>