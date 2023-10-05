<template>

  <div class="content">
    <div class="column">
      <div  v-for="(item) in leftPages">
        <page :title="item.title" :desc="item.desc" @click="openBigDiary(item.id,currentPage,item.title)"></page>
      </div>
    </div>
    <div class="column">
      <div v-for="(item) in rightPages" >
        <page :title="item.title" :desc="item.desc" @click="openBigDiary(item.id,currentPage,item.title)"></page>
      </div>
    </div>
  </div>
    <el-pagination
      v-model:current-page="currentPage"
      :page-size="pageSize"
      :background="true"
      layout="total, prev, pager, next, jumper"
      :total="pagesLength"
      @current-change="handleCurrentChange"
      class="pagenation"
    />

</template>

<script>
import {useStore} from 'vuex'
import page from './page.vue'
import {computed, inject,onMounted, onUpdated, reactive, ref} from 'vue'
export default {
  components:{page},
  props:{
    page:{
        defalut:1//默认值
    },
  },
  setup(props){
    const store=useStore()
    let currentPage=computed({
      get(){
        return store.state.diaries.currentPages
      },
      set(){
        store.dispatch('diaries/changePage',Number(props.page))
      }
      }
    )
    let pageSize=computed(()=>store.state.diaries.pageSize)
    let leftPages=computed(()=>store.getters['diaries/leftPages'])
    // console.log(leftPages)
    let rightPages=computed(()=>store.getters['diaries/rightPages'])
    let pagesLength=computed(()=>store.getters['diaries/pagesLength'])
    const swichToDiaryPage=inject('swichToDiaryPage')
    const swichToBigDiary=inject('swichToBigDiary')
    const handleCurrentChange = (val) => {
      swichToDiaryPage(val)
    }
    const openBigDiary=function(id,fromPage,title){
      // console.log(id)
      swichToBigDiary(id,fromPage,title)
    }
     onMounted(()=>{
        store.dispatch('diaries/changePage',Number(props.page))
    })
    onUpdated(()=>{
        store.dispatch('diaries/changePage',Number(props.page))
    })
    
    return{currentPage,pageSize,pagesLength,leftPages,rightPages,handleCurrentChange,openBigDiary}
  },

}
</script>

<style scoped>
.content {
  margin-top:10px ;
  display: flex;
  width: 1000px;
  position: relative;
  /* min-height: 600px; */
  /* top: 50px; */
  min-height: 80vh;
  left: 50%;
  transform: translate(-50%,0);
}
.column {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 5px;
}
.pagenation{
  position: relative;
  left: 50%;
  margin: 20px;
  width: 500px;
  transform: translate(-50%,0%);
}
</style>