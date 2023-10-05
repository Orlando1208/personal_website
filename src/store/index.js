import { createStore } from "vuex";
import global from "./modules/global";
import diaries from "./modules/diaries";
import imageWall from "./modules/imageWall";
export default createStore({
    ...global,
    modules:{
        diaries,
        imageWall
    }
})