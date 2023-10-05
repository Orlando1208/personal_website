<template>
<el-backtop :right="60" :bottom="100" style='background-color: #000000;color:white' />
  <div class="content">
    <div class="column" v-for="(pset,index) in resources" :key="index">
        <div class="d" v-for="(res,index) in pset" :key="index">
            <el-image
              :src="res"
              fit="cover"
              lazy
              @click="openBigImg(res)"
            >
              <template #error>
                <div class="image-slot">
                  <el-icon><Picture /></el-icon>
                </div>
              </template>
            </el-image>
        </div>
    </div>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import { inject, reactive,computed } from 'vue'
export default {
      setup(props,context){
        const store=useStore()
        let resources=computed(()=>store.getters['imageWall/resources'])
        const openBigImg=inject('openBigImg')
        return{resources,openBigImg}
    }
}
</script>

<style scoped>
.el-image {
  padding: 0 5px;
  max-width: 300px;
  max-height: 200px;
  width: 100%;
  height: 200px;
  cursor: pointer;
}

.image-slot {
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--el-fill-color-light);
  color: var(--el-text-color-secondary);
  font-size: 30px;
}
.image-slot .el-icon {
  font-size: 30px;
}
.content {
  display: flex;
  width: 1200px;
  position: relative;
  /* top: 50px; */
  left: 50%;
  transform: translate(-50%,0);
}
.column {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 5px;
}
.column:last-child {
  margin-right: 0;
}
</style>