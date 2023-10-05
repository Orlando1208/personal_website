<template>
  <div id="main">
    <div id="leftBox">
      <div class="infoBox">
        <h2>1.</h2>
        <p>We blend creative and strategic thinking to solve problems, grounding everything in robust, logical, fact-based insights.</p>
      </div>
      <div class="infoBox">
        <h2>2.</h2>
        <p>We blend creative and strategic thinking to solve problems, grounding everything in robust, logical, fact-based insights.</p>
      </div>
    </div>
    <div id="centerBox">
      <img src="../../assets/imgs/Untitled4.jpg" alt="">
      <div>
        <h3>HOW DO I WORK</h3>
        <p>We align leaders and mobilize teams by activating and igniting actions around the Quest. We move thoughtfully and with intent through project workstreams while working to</p>
      </div>
    </div>
    <div id="rightBox">
      <div class="infoBox">
        <h2>3.</h2>
        <p>We blend creative and strategic thinking to solve problems, grounding everything in robust, logical, fact-based insights.</p>
      </div>
      <div class="infoBox">
        <h2>4.</h2>
        <p>We blend creative and strategic thinking to solve problems, grounding everything in robust, logical, fact-based insights.</p>
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
    position: relative;
    width: 1000px;
  }
  img{
    max-width: 100%;
    max-height: 100%;
  }
  #centerBox{
    width: 400px;
    height: 605px;
    background-color: black;
    color: white;
    text-align: center;
    margin-left:300px;
    margin-right:300px;
  }
  #centerBox h3{
    font-family: 'Roboto',sans-serif;
    font-size: 20px;
  }
  #centerBox p{
    font-family: 'Open Sans',sans-serif;
    font-size: 18px;
    margin: 20px;
  }
  #leftBox{
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
  }
  #rightBox{
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
  }
  .infoBox{
    box-sizing: border-box;
    width: 300px;
    height: 300px;
    padding: 30px;
    font-family: 'Open Sans',sans-serif;
    color: black;
    font-size: 18px;
  }
  .infoBox p{
    margin-top:20px ;
  }
      @font-face {
  font-family: "Roboto";
  src: url("../../assets/fonts/roboto-font/RobotoBold-Xdoj.ttf")
}
      @font-face {
  font-family: "Open Sans";
  src: url("../../assets/fonts/open-sans-font/OpenSans-B9K8.ttf")
}
</style>