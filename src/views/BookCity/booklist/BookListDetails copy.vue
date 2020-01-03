<template>
  <div>
    <!-- <div v-for="(item,idx) in bookslist" :key="idx">
      <div>
         <div>
         图片：<img :src="`http://statics.zhuishushenqi.com${item.book.cover}`">
      </div>
      <div>
     <router-link :to="'/bookinfo2/'+item.book._id+'/'+item.book.author">
         <span> 标题：{{item.book.title}}</span>
      </router-link>
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
    </div> -->
    
      <!-- <div class="mui-scroll-wrapper"> -->
        <!-- <div class="mui-scroll"> -->
          <div class="contentText-list">
          <div v-for="(item,idx) in bookslist" :key="idx" tag="div" class="bookcase">
            <router-link :to="'/bookinfo1/'+item.book._id+'/'+item.book.author" tag="div" class="booklist">
              <div class="picbox">
               <img :src="`http://statics.zhuishushenqi.com${item.book.cover}`">
              </div>
              <div class="detailbox">
                <div class="title">{{item.book.title}}</div>
                <br />
                <div class="shortIntro">
               <p> {{item.book.longIntro}}</p>  
                  
                  </div>
                <span class="image">
                  <img src="@/images/author.png" alt />
                </span>
                <span class="author">{{item.book.author}}</span>
 
                <span class="minorCate">{{item.book.minorCate}}</span>
 
                <!-- <span class="tag" >{{item.book.tags[0]}}</span> -->
                <br />
              </div>
            </router-link>
          </div>
       
      </div>
    </div>
  
</template>

<style lang="less" scoped>
a{
  font-family: '微软雅黑'
}
.container {
  position: relative;
  // padding-top: 38px;
  height: calc(100% - 12px);
  
}
.booktype {
  color: #ccc;
  position: fixed;
  z-index: 99;
  padding-top: 40px;


}
.booktype a {
  display: inline-block;
  border-radius: 10px;
  color: gray;
  font-size: 15px;
  width: 82px;
  height: 36px;
  line-height: 36px;
  margin-right: 3px;
}
.contentText {
  // padding-top: 20px;
  box-sizing: border-box;
   height: calc(100% - 40px);
  //  position: relative;
  //  overflow: hidden;
   overflow-y: auto;
}
.contentText-list {
  // position: relative;
        margin: 0;
        padding:  0 10px 10px 10px;
        box-sizing: border-box;
        padding-bottom: 0;
        left: 0;
        bottom: 40px
}
.booktype {
  width: 100%;
  height: 40px;
  position: relative;
  // width: 82px;
  margin: 5px 0 5px 5px;
}
.booktype a {
  display: inline-block;
  border-radius: 10px;
  color: gray;
  font-size: 15px;
  width: 82px;
  height: 36px;
  line-height: 36px;
  margin-right: 3px;
}
.booktype a:hover,
.booktype a.active {
  background-color: rgb(235, 184, 209);
  color: white;
}

.bookcase {
  width: 100%;
  display: flex;
  margin-top: 20px;
}
.booklist {
  display: flex;
}

.content {
  margin: 0;
  position: relative;
  padding-bottom: 36px;
  height: 100%;
  // height: 587px;
  // overflow: auto;
}
.picbox {
  margin-right: 10px;
}
.picbox > img {
  width: 93px;
  height: 100px;
  display: inline-block;
  box-shadow: 1px 0px 3px 1px gray;
}
.detailbox {
  color: black;
}
.shortIntro {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2; /*限制行数为2行*/
  line-clamp: 2; /*限制行数为2行*/
  font-size: 14px;
  margin: 10px;
  color: gray;
}
.title {
  float: left;
  margin-left: 10px;
}
.author {
  float: left;
  font-size: 14px;
  
}
.image > img {
  float: left;
  margin-left: 10px;
  width: 20px;
  height: 20px;
  margin-top: 0;
}
.tag {
  margin-right: 10px;
  float: right;
  font-size: 12px;
  color: rgb(85, 84, 84);
  border-radius: 40% 40% 40% 40%;
  background-color: rgb(236, 207, 221);
}
.minorCate {
  margin-right: 30px;
  float: right;
  font-size: 12px;
  color: rgb(85, 84, 84);
  border-radius: 40% 40% 40% 40%;
  background-color: rgb(236, 207, 221);
}

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