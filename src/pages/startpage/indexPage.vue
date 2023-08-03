<template>
    <div>
        <!-- <h1>indexpage</h1> -->
         <video id="v1" autoplay loop muted>
              <source src="../../assets/videos/amazing_landscape.mp4" type="video/mp4"  />
        </video>
        <div id="mask">
            <el-container>
            <el-aside width="30%">
                <div id="intro">
                    <div id="hello">Hello</div>
                    <p>Welcome to Echo's personal website</p>
                </div>

            </el-aside>
                <el-container>
                    <el-header></el-header>
                    <el-main>
                        <button id="coop">Cooperate with me</button>
                    </el-main>
                    <el-footer>
                        <el-button color="#303133" round :dark="isDark" id="invite">Invited</el-button>
                    </el-footer>
                </el-container>
            </el-container>
            
        </div>
    </div>
</template>

<script>
export default {
    name:"indexPage"
}
</script>

<style scoped>
        #invite{
            position: relative;
            left:80%;
        }
        #coop{
            width: 180px;
            height: 50px;
            background-color: #fff;
            border: transparent;
            border-radius: 25px;
            color: #000;
            position: relative;
            top: 50%;
            left:25%;
            transform: translate(-50%,-50%);
            font-size: 15px;
            cursor: pointer;
        }
        #coop:hover{
            background-color: #c5c5c5;
        }
        #intro{
            position: relative;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            overflow: hidden;
            max-width: 70%;
            /* height: 100%; */
        }
        #hello{
            font-size: 50px;
            font-weight: 400;
        }
        #mask{
            overflow: hidden;
            background-color: rgba(0,0,0,0.5);
            position: fixed;  
            right: 0px;  
            bottom: 0px;  
            min-width: 100%;  
            min-height: 30%;  
            color: white;
        }
        video{  
            position: fixed;  
            right: 0px;  
            bottom: 0px;  
            min-width: 100%;  
            min-height: 100%;  
            height: auto;  
            width: auto;  
            /*加滤镜*/
            /*filter: blur(15px); //背景模糊设置 */
            /*-webkit-filter: grayscale(100%);*/  
            /*filter:grayscale(100%); //背景灰度设置*/  
            z-index:-11
        }  
        source{  
            min-width: 100%;  
            min-height: 100%;  
            height: auto;  
            width: auto;  
        } 
</style>