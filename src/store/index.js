import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    show:false,
    num:1,
    bookId:"",
    bookSourceId:"",
    bookCatalogList:[],
    idx:[],
    bookcase:[],
    bookcasearr:[],

  },
  mutations: {  
    addcase(state,bcase) {
      var flag=false
      console.log(state.bookcase,"pppppppppppppppppppp")
      // state.bookcase.push("ppp")
      state.bookcase.forEach((item,indx)=>{
        if(item._id==bcase._id){
          // state.bookcase.push("bcase")
          console.log(1)
          item.idx=bcase.idx
          flag=true
        }
      })
      if (flag==false){
        state.bookcase.push(bcase)
      }
      console.log(state.bookcase,"sdsadsadsad")

      // state.bookcase.push(bcase)


    },
 
    getIdx (state,objidx) {
      var flag = false
       state.idx.forEach((item,index)=>{
         if(item.objbookId=objidx.objbookId){
           item.objidx =objidx.objidx;
           flag=true
         }
       })
       if (flag == false) {
         state.idx.push(objidx)
       }

    },

    getBookId (state,Id) {
       state.bookId=Id

    },
    getBookSourceId (state,Id) {
       state.bookSourceId=Id

    },
    getBookCatalogList(state,List) {
      state.bookCatalogList=List

   },
    setShow(state,e){
          state.show=e
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]  //加上这个就可以了
})
