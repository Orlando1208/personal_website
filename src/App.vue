<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <indexPage/>
  <!-- <inviteForm></inviteForm> -->
</template>

<script>
import indexPage from './pages/startpage/indexPage.vue'
import inviteForm from './pages/startpage/inviteForm.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import Main from './pages/startpage/main.vue'

export default {
  name: 'App',
  components: {
    inviteForm,
    indexPage
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
