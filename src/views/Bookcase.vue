<template>
    <div class="list">
        <div class="bookcase">
           <top class="top" title="书架" backgroundcolor="white" color="red" back="返回"></top>
           <div class="top1"></div>

   <van-row gutter="20" >
   
  <van-col  class="caselist" v-for="(item,idx) in bookcase " :key="idx" span="8" >
      <router-link :to="'/bookinfo3/'+item._id+'/'+item.author+'/'+item.idx" tag="div">
      <div class="imgcase">
          <img class="img" :src="`http://statics.zhuishushenqi.com${item.cover}`" />
      </div>
      <div class="casetitle">{{item.title}}</div>
       </router-link >
  </van-col>
    
</van-row>
    
    </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return{
            bookcase:this.$store.state.bookcase
            // bookcase:this.this.$store.state.bookcasearr
        }
    },
    created() {
        this.getBookCase()

    },
    methods: {
         
         getBookCase(){
             console.log("haha"+this.bookcase[0])
            //  console.log(this.$store.state.bookcase)
            //  console.log(this.id)
            //  axios.get(`https://novel.juhe.im/book-info/${this.id}`).then(res=>{
            //      console.log(res)
            //      this.this.$store.state.bookcasearr.push(res.data)
            //      console.log(this.bookcase)
            //  })

         }
    

    }
}
</script>
<style >
.bookcase {
    height: 100%;
    margin: 15px;
}
.caselist {

   height: 220px;
}
.top1{
    margin-top: 5px;
    height: 10%;
}
.imgcase {
    height: 150px;
}
img {
    height: 100%;
    padding-top:18px;
}
.casetitle{
 margin-top:10px;
}
</style>