<template>
  <div>
    <!-- <teleport to="body"> -->
      <div class="mask">
          <div class="dialog">
            <div class="common-layout">
              <el-container>
                <el-header>
                  <div id="close" @click="closeBtn">X</div>
                  <div id="head">
                  Please input invite code
                  </div>
                </el-header>
                <el-main>
                    <el-input
                      v-model="inviteCode"
                      maxlength="10"
                      placeholder="Invite code"
                      show-word-limit
                      type="text"
                    />
                    <el-button type="info" round @click="onShow" v-show="isRobot" class="btn" size="large">Robot verification</el-button>
                    <el-button type="success" round @click="onShow" v-show="!isRobot" class="btn" disabled size="large"><el-icon><Check /></el-icon>Comfirmed</el-button>
                    <Vcode :show="isShow" @success="onSuccess" @close="onClose" />
                </el-main>
                <el-footer>
                  <el-button :disabled='isRobot' type="primary" round style="width:140px;height:50px" @click="enterOrOut">Enter</el-button>
                </el-footer>
              </el-container>
            </div>
          </div>
      </div>
  <!-- </teleport> -->
  </div>
</template>

<script>
import {inject, ref} from "vue";
import Vcode from "vue3-puzzle-vcode";
export default {
  components:{Vcode},
  name:'inviteForm',
  emits:['closeInviteForm'],
  setup(props,context){
      let inviteCode=ref('')
        
      const isShow = ref(false);

      let isRobot=ref(true)
      let verifySuccess=ref(false)

      const onShow = () => {
        isShow.value = true;
      };

      const onClose = () => {
        isShow.value = false;
      };

      const onSuccess = () => {
        isRobot.value=false
        verifySuccess.value=true
        onClose(); // 验证成功，需要手动关闭模态框
      };

      const closeBtn=()=>{
        // alert('close')
        context.emit('closeInviteForm')
      }
      const swichToPrivatePage=inject('swichToPrivatePage')
      const enterOrOut=()=>{
        if(true){
          // console.log('enter')
          context.emit('closeInviteForm')
          swichToPrivatePage()
        }
      }
			return {isShow,inviteCode,isShow,isRobot,verifySuccess,onShow,onClose,onSuccess,closeBtn,enterOrOut}
		}
}
</script>

<style scoped>
    #close{
      position: absolute;
      left: 10px;
      top: 10px;
      cursor: pointer;
      width: 20px;
      height: 20px;
    }
    .btn{
      margin: 30px;
    }
    #head{
      margin-top: 20px;
      height: 100px;
      width: 100%;
      font-size: 18px;
    }
  	.mask{
		position: absolute;
		top: 0;bottom: 0;left: 0;right: 0;
		background-color: rgba(0, 0, 0, 0.5);
	}
	.dialog{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		text-align: center;
		width: 400px;
		height: 330px;
		background-color: rgb(255, 255, 255);
	}
</style>

