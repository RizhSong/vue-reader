<template>
  <div>
   
    <div v-for="(item,idx) in bookslist" :key="idx">
      <div>
         <div>
         图片：<img :src="`http://statics.zhuishushenqi.com${item.cover}`">
      </div>
      <div>
        <!-- <router-link :to="'/read/'+this.id"> -->
         <span> 标题：{{item.book.title}}</span>
        <!-- <router-link> -->
      </div>
      <div>
       <span>作者：{{item.book.author}}</span>
      </div>
      <div>
       追书人数：{{item.book.latelyFollower}}
        字数：{{item.book.wordCount}}
      </div>
      </div>
      <div><span>推荐指数:{{item.comment}}</span> </div>
      <div> <p>简介{{item.book.longIntro}}</p></div>
     
   </div>
    </div>
</template>

<style lang="less" scoped>


</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      id: this.$route.params.id,
      allinformation: {},
      booklist: {}, // 书单列表
      bookslist: {} // 书籍总和列表
    };
  },
  created() {
    this.getBookListDetails();
  },
  methods: {
    getBookListDetails() {
      axios.get("/booklists/" + this.id).then(res => {
        this.allinformation = res.data;
        // console.log(JSON.stringify(this.allinformation))
        this.booklist = res.data.bookList;
        console.log(JSON.stringify(this.booklist))
        this.bookslist = res.data.bookList.books;
        //  this.bookslist.array.forEach(element => {
        //       return element.book ;
        //       return element.comment;
        //  });
        // console.log(JSON.stringify(this.bookslist));
        //  this.booklistnext = res.data.bookList
        //   console.log(JSON.stringify(this.booklistnext))
        // for(var i = 0; i<res.data.bookList.books){

        // }
      });
    }
  }
};
</script>