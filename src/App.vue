<template>
  <indexPage/>
</template>

<script>
import indexPage from './pages/indexPage.vue'
// import {useStore} from 'vuex'
// import HelloWorld from './components/HelloWorld.vue'
// import Main from './pages/startpage/main.vue'

export default {
  name: 'App',
  components: {
    indexPage
  },
  setup(){
    // const store=useStore()
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
