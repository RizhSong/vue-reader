<template>
  <div class="classname">
    <div>
      <top class="top" title="书单" backgroundcolor="white" color="red"></top>
      <!-- <van-tabs v-model="active" @click="tabs">
        <van-tab v-for="(item,i) in classlist" :key="i" :title="item"></van-tab>
      </van-tabs>-->
    </div>
    <div class="classname-conent">
      <div>
        <!-- <div v-if="loading">
          <van-loading />
          <van-loading type="spinner" />
        </div>-->

        <!-- <van-row type="flex" class="bookrow" v-for="item in bookslist" :key="item.cover"> -->
          <router-link  type="flex" class="bookrow" v-for="item in bookslist" :key="item.cover" :to="'/bookinfo1/'+item.book._id+'/'+item.book.author" tag="van-row">
            <van-col class="book1" span="5">
              <img class="img" v-lazy="`https://statics.zhuishushenqi.com${item.book.cover}` " />
            </van-col>
            <van-col span="1"></van-col>
            <van-col class="title" span="18">
              <div>
                <h4>{{item.book.title}}</h4>

                <span class>作者：{{item.book.author}}</span>
              </div>
              <div>
                <p class="book">{{item.comment}} </p>
              </div>
            </van-col>
          </router-link>
        <!-- </van-row> -->
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
// .name-list {
//   height: 100%;
// }
.title {
  text-align: left;
}
.van-row {
  padding-top: 0;
}

.author {
  color: #555;
}
.bookrow {
  background-color: #ddd;
  margin: 10px 0;
  padding-top: 10px;
  // border: 1px solid #999;
  border-radius: 10px;
}
.book {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; //文本行数
  overflow: hidden;
  // text-overflow : ellipsis;
  // margin-top: 5px;
  // margin-bottom: 5px;
  font-size: 14px;
}
.img {
  height: 90px;
}
.classname {
  height: 100%;
}
van-tabs {
  height: 44px;
  overflow: auto;
}

.classname-conent {
  padding: 10px;
  height: calc(100%);
  overflow: auto;
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
        console.log(res);
        // console.log(JSON.stringify(this.allinformation))
        this.booklist = res.data.bookList;
        // console.log(JSON.stringify(this.booklist))
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