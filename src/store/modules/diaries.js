export default{
    namespaced: true,
    state:{
        diaries:[
            {id:1,title:1,desc:"aaa"},
            {id:2,title:2,desc:"aaa"},
            {id:3,title:3,desc:"aaa"},
            {id:4,title:4,desc:"aaa"},
            {id:5,title:5,desc:"aaa"},
            {id:6,title:6,desc:"aaa"},
            {id:7,title:7,desc:"aaa"},
            {id:8,title:8,desc:"aaa"},
            {id:9,title:9,desc:"aaa"},
            {id:10,title:10,desc:"aaa"},
            {id:11,title:11,desc:"aaa"},
            {id:12,title:12,desc:"aaa"},
            {id:13,title:13,desc:"aaa"},
            {id:14,title:14,desc:"aaa"},
            {id:15,title:15,desc:"aaa"},
            {id:16,title:16,desc:"aaa"},
            {id:17,title:17,desc:"aaa"},
            {id:18,title:18,desc:"aaa"},
            {id:19,title:19,desc:"aaa"},
            {id:20,title:20,desc:"aaa"},
            {id:21,title:21,desc:"aaa"},
            {id:22,title:22,desc:"aaa"},
            {id:23,title:23,desc:"aaa"},
            {id:24,title:24,desc:"aaa"},
            {id:25,title:25,desc:"aaa"},
            {id:26,title:26,desc:"aaa"},
        ],
        currentPages:1,
        pageSize:12
    },
    mutations:{
        changePage(state,val){
            state.currentPages=val
        }
    },
    actions:{
        changePage(store,val){
            store.commit('changePage', val)
        }
    },
    getters:{
        leftPages(state){
            // console.log(state.diaries.filter((val,index)=>{
            //     return index>=(state.currentPages-1)*state.pageSize&&index<(state.currentPages)*state.pageSize&&index%2==0
            //   }),1)
            return state.diaries.filter((val,index)=>{
                return index>=(state.currentPages-1)*state.pageSize&&index<(state.currentPages)*state.pageSize&&index%2==0
              })
        },
        rightPages(state){
            return state.diaries.filter((val,index)=>{
                return index>=(state.currentPages-1)*state.pageSize&&index<(state.currentPages)*state.pageSize&&index%2==1
              })
        },
        pagesLength(state){
            return state.diaries.length
        }
    }
}