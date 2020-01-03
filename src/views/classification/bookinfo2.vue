<template>
  <div class="listcontent">
    <top class="top" :title="bookinfo.title" backgroundcolor="white" color="red" back="返回"></top>
            <div v-if="loading">
          <van-loading />
          <van-loading type="spinner" />
        </div>
    <div class="list-content" v-if="!loading">
      <div class="box">
        <div class="boxtop1"></div>
        <div class="boxtop2">
          <div class="boxleft">
            <img class="img" :src="`http://statics.zhuishushenqi.com${cover}`" />
          </div>
          <div class="boxright">
            <div class="boxright1">{{bookinfo.title}}</div>
            <div class="boxright2">
              <span class="orange">{{bookinfo.author}}</span>&nbsp;&nbsp;|&nbsp;&nbsp;
              <span class="black">{{bookinfo.copyright}}</span>
            </div>
            <div class="boxright3 black">共{{bookinfo.wordCount | wordParseInt}}万字</div>
            <div class="boxright4 orange">开通VIP免广告></div>
          </div>
        </div>
      </div>
      <div class="score">
        <div class="score1">
          <p>
            {{bookinfo.rating&&bookinfo.rating.score | wordToFixed}}
            <van-rate v-model="value" allow-half void-icon="star" void-color="#eee" size="10px" />
          </p>
          <p class="smallword">{{bookinfo.rating&&bookinfo.rating.tip}}></p>
        </div>
        <div class="score2">
          <p>{{bookinfo.retentionRatio}}%</p>
          <p class="smallword">读者留存</p>
        </div>
        <div class="score3">
          <p>{{bookinfo.latelyFollower | wordParseInt}}万</p>
          <p class="smallword">最近人气</p>
        </div>
        <div class="score4">
          <p>{{bookinfo.totalFollower | wordParseInt}}万</p>
          <p class="smallword">累计人气</p>
        </div>
        <div></div>
      </div>
      <div class="Introduction">
        <div class="Introduction1">简介</div>
        <div class="Introduction2">
          <span class="spance" v-for="(item ,index) in tags" :key="index">
            <van-tag round>{{ item }}</van-tag>
          </span>
        </div>
        <div id="i3" :class="wordShow" @click="show()">
          {{bookinfo.longIntro}}
          <van-icon v-show="flag" class="arrow" name="arrow-down" />
        </div>
      </div>

      <div tag="div" class="line" @click="getPageCatalog">
        <div class="catalog">
          <div class>目录</div>
          <div class="catalog2 vertical">{{bookinfo.lastChapter}}</div>
          <div class="catalog3">
            <van-icon class="vertical" size="12px" name="arrow" />
          </div>
        </div>
      </div>
      <transition class="v-enter v-leave-to v-enter-active v-leave-active v-leave v-leave-to">
        <div class="pageHS" v-show="pageshow">
          <div class="pageHI" @click="removePageCatalog"></div>
          <div class="pageSH">
            <div>目录</div>
            <div class="chapter" v-for="(item,idx) in Catalog" :key="idx">
              <router-link :to="'/read/'+idx" tag="div">{{idx + 1}}.{{item.title}}</router-link>
            </div>
          </div>
        </div>
      </transition>

      <div class="gray"></div>
      <div class="essay">
        <div class="essay1">
          <span>热门长评</span>
          <span>&nbsp;&nbsp;</span>
          <span class="essayWord">共{{comment.length}}条</span>
        </div>
        <div class="essay2">
          <van-icon name="edit" class="essayWord1" />写评论
        </div>
      </div>
      <div class="comment">
        <van-swipe style="height: 150px;" vertical :show-indicators="false" :autoplay="2000">
          <van-swipe-item v-for="item in comment" :key="item.id">
            <div class="comment1">
              <img class="img1" :src="`http://statics.zhuishushenqi.com/${item.author.avatar}`" />
              <!-- <img class="img" src="" alt=""> -->
              <span class="nameWord">{{item.author.nickname}}</span>
              <van-tag plain round>LV.{{item.author.lv}}</van-tag>
            </div>
            <div class="comment2">
              <span></span>
              <van-rate class="nameWord1" v-model="item.rating" />
            </div>
            <div class="comment3">{{item.content}}</div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="see">查看全部{{comment.length}}条评论</div>
      <div class="gray"></div>
      <div>
        <div>作者其他作品</div>

        <div class="xl"></div>
      </div>
      <div class="authorBooklist">
        <!-- <div > -->
        <router-link
          :to="'/bookinfo2/'+item._id+'/'+item.author"
          tag="div"
          class="authorBooklist1"
          v-for="item in authorBooklist"
          :key="item.cover"
        >
          <div class="authorBooklist2">
            <img class="img2" :src="`http://statics.zhuishushenqi.com${item.cover}`" />
            <br />
          </div>

          <div class="authorBooklist3">{{item.title}}</div>
        </router-link>
        <!-- </div> -->
      </div>
      <!-- <div>s</div> -->
      <div class="gray"></div>
      <div class="gray"></div>
      <div>
        <div>推荐书籍</div>

        <div class="xl"></div>
      </div>
      <div class="authorBooklist">
        <!-- <div > -->
        <router-link
          :to="'/bookinfo2/'+item._id+'/'+item.author"
          tag="div"
          class="authorBooklist1"
          v-for="item in recommendBooklist"
          :key="item.cover"
        >
          <div class="authorBooklist2">
            <img class="img2" :src="`http://statics.zhuishushenqi.com${item.cover}`" />
            <br />
          </div>

          <div class="authorBooklist3">{{item.title}}</div>
        </router-link>
        <!-- </div> -->
      </div>
      <div class="gray"></div>
      <div>
        <div>
          <h3>图书信息</h3>
        </div>
        {{bookinfo.copyrightInfo}}
        <div></div>
      </div>

      <mt-tabbar v-show="flag" class="tabbar">
        <mt-tab-item id class="bookf">
          <div @click="addcase" class="tabline" tag="div">加入书架</div>
        </mt-tab-item>
        <mt-tab-item id class="read">
          <router-link :to="'/read/'+0" class="tabline" tag="div">开始阅读</router-link>
        </mt-tab-item>
        <mt-tab-item id class="bookf">
          <router-link to="/classification" class="tabline" tag="div">下载</router-link>
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>
<style lang="less" scoped>
.tabbar {
  height: 40px;
  border-color: red;
}
.tabline {
  line-height: 40px;
}
.bookf {
  color: red;
}
.read {
  background-color: red;
  color: white;
}

::-webkit-scrollbar {
  display: none;
}
.authorBooklist {
  display: flex;
  // width: 100%;
  white-space: nowrap;
  overflow: auto;
  overflow-y: visible;
}
.authorBooklist1 {
  margin-left: 15px;
  width: 25%;
}
.authorBooklist3 {
  overflow: hidden;
  text-overflow: ellipsis;
  // font-size: 8px;
  //  white-space: normal
}
.img2 {
  width: 95px;
  height: 125px;
}
.xl {
  margin-top: 8px;
  border-top: 1px solid #ccc;
}
.see {
  text-align: center;
  color: red;
  margin-top: 8px;
}
.comment {
  // height: 10px;
  // margin: auto;
  // line-height: 10px;
  //  vertical-align: middle;
  // text-align:center;
  padding-left: 15px;
  text-align: left;
  // width:20px; height:20px; text-align:left; line-height:20px
}
.nameWord {
  //  vertical-align: middle;
}
.comment3 {
  margin-top: 10px;
  // overflow: hidden;
  // // text-overflow: ellipsis;
  // display: -webkit-box;
  // -webkit-line-clamp: 4;
  // -webkit-box-orient: vertical;

  overflow: hidden;
  // text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.comment1 {
  text-align: left;
  margin-top: 5px;
}
.nameWord1 {
  vertical-align: middle;
}
.img1 {
  // display: inline-block;

  // margin-top: 1em;
  width: 2em;
  height: 2em;
  border-radius: 50%;

  // background-color: red
}
.comment {
  margin-top: 10px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.gray {
  height: 8px;
  margin-top: 8px;
  background-color: #ddd;
}
.essay {
  margin-top: 10px;
  display: flex;
  padding-left: 15px;
}
.essayWord1 {
  vertical-align: text-bottom;
}
.essay1 {
  flex: 1;
  text-align: left;
}
.essayWord {
  font-size: 10px;
}
.essay2 {
  padding-right: 15px;
  flex: 1;
  text-align: right;
  // background-color: red
  color: red;
}

.v-enter,
.v-leave-to {
  transform: translateX(400px);
}
.v-leave-active,
.v-enter-active {
  transition: transform 1s ease;
}
// .v-enter-to,.v-leave{
//    transform: translateX(0px)
// }
* {
  padding: 0;
  margin: 0;
}
.chapter {
  margin-bottom: 10px;
}
// .list {
//   height:500px;
// }
.pageHS {
  width: 100%;
  height: 100%;
  // background-color: red;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  //   z-index: 1000;
  // height: 100%;
  // display: flex;
  //  position: absolute;
  // height: 100%;
  // left: 0;
  // top: 0;
}
.pageHI {
  flex: 1;
  // background-color: yellow;

  flex: 1;
  //  height: 100%;

  opacity: 0;
  // background-color: yellow;
}
.pageSH {
  padding-left: 25px;
  flex: 12;
  overflow: auto;
  // flex: 4;

  text-align: left;
  //   overflow:auto;
  //   height: 100%;
  //   position: relative;
  //   height: 100%;
  // background: url(../../../lib/images/pagecolor1.jpg);
  background-color: #eeeeee;
  background-size: cover;

  // background-color: red;
}
.line {
  padding-left: 15px;
}
.vertical {
  vertical-align: middle;
  font-size: 12px;
}
.listcontent {
  height: 100%;
}
.list-content {
  height:calc(100% - 44px);
  overflow: auto;
}

.catalog {
  padding-top: 10px;
  border-top: 1px #ccc solid;
  margin-top: 10px;
  margin-right: 10px;
  display: flex;
  align-items: center;
}
.catalog1 {
  flex: 3;
  vertical-align: middle;
  text-align: left;
}
.catalog2 {
  text-align: right;
  flex: 15;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.catalog3 {
  flex: 1;
}
// .Introduction3::before {
//   content: ">````111";
//   z-index: 100;
//   //   left: 0;
//   //   top: 0;
// }
.IntroductionShow {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 100;
  -webkit-box-orient: vertical;
  font-size: 12px;
  margin-top: 15px;
  position: relative;
}
.IntroductionHidden {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 12px;
  margin-top: 15px;
  position: relative;
}
.arrow {
  display: inline-block;
  background-color: white;
  position: absolute;
  font-size: 16px;
  width: 15px;
  height: 15px;
  right: 5px;
  bottom: 0;
  z-index: 10;
  top: 24px;
}
.catalog3 i {
  top: 0;
}
.spance {
  margin-right: 8px;
}
.Introduction {
  padding-left: 15px;
  padding-right: 15px;
  text-align: left;
}
.box {
  padding-left: 15px;
  height: 180px;
  background-color: #666;
}
.boxtop1 {
  height: 60px;
  //   background-color: green;
}
.boxtop2 {
  height: 120px;
  display: flex;
  display: -webkit-flex;
  //   flex-direction: column;
  justify-content: space-between;
  // background-color: #ccc;
  text-align: left;
  font-size: 16px;
  color: white;
}

.boxleft {
  flex: 2;
  //   background-color: red;
}
.boxright {
  padding-left: 15px;
  flex: 5;
  //   background-color: yellow;
}
.img {
  height: 100%;
  width: 100%;
}
.boxright > div {
  margin-bottom: 5px;
}
.boxright1 {
  font-size: 18px;
}
.black {
  color: #ddd;
}
.orange {
  color: orange;
}
.score {
  margin-top: 25px;
  display: flex;
  height: 50px;
  text-align: left;
  padding-left: 15px;
}
.score1 {
  flex: 3;
}
.score2 {
  flex: 2;
}
.score3 {
  flex: 2;
}
.score4 {
  flex: 2;
}
.smallword {
  font-size: 8px;
}
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      wordShow: "IntroductionHidden",
      id: this.$route.params.id,
      author: this.$route.params.author,
      bookinfo: {},
      recommendBooklist: [],
      authorBooklist: [],
      value: 0,
      tags: [],
      cover: "",
      pageshow: false,
      flag: true,
      sourceId: "",
      Catalog: [],
      comment: [],
      val: 1,
      loading:true
    };
  },
  created() {
    this.getinfo();
    this.getCatalog();
   
  },
  beforeDestroy() {
    this.saveData();
    this.getBookId();
    this.getBookSourceId();
    this.getBookCatalogList();
  },

  methods: {
    getIdx(idx) {
      var objidx = {
        objbookId: this.id,
        objidx: idx
      };
      this.$store.commit("getIdx", objidx);
    },
    getBookCatalogList() {
      this.$store.commit("getBookCatalogList", this.Catalog);
    },
    getBookSourceId() {
      this.$store.commit("getBookSourceId", this.sourceId);
    },
    getBookId() {
      this.$store.commit("getBookId", this.id);
    },
    saveData() {
      localStorage.setItem("input_author", this.author);
    },
    removePageCatalog() {
      this.pageshow = false;
    },

    getPageCatalog() {
      this.pageshow = true;
    },
      addcase() {
      // const bookcaseobj={
      //     bookId:this.$store.state.bookId,

      // }

      axios
        .get(`https://novel.juhe.im/book-info/${this.$store.state.bookId}`)
        .then(res => {
          // this.bookcase = res.data;
          const obj = {
            _id: res.data._id,
            cover: res.data.cover,
            author: res.data.author,
            title: res.data.title,
            idx: 0
          };
          this.$store.commit("addcase", obj);
          //    console.log(obj)
          // console.log('bookcase'+res.data)
        });
    },
    show() {
      this.flag = !this.flag;
      if (this.wordShow == "IntroductionHidden") {
        this.wordShow = "IntroductionShow";
        // console.log(1)
      } else if (this.wordShow == "IntroductionShow") {
        // console.log(2)
        this.wordShow = "IntroductionHidden";
      }

      // document.getElementById("i3").classList.toggle("show");
      //   document.getElementById("i3").classList.add("show");
    },
    getCatalog() {
      axios
        .get(`https://novel.juhe.im/book-sources?view=summary&book=${this.id}`)
        .then(res => {
          // console.log(res)
          this.sourceId = res.data[0]._id;
          console.log("zz" + this.sourceId);

          axios
            .get(`https://novel.juhe.im/book-chapters/${this.sourceId}`)
            .then(res => {
              //  console.log(res)
              this.Catalog = res.data.chapters;
               this.loading = false;
              console.log(this.Catalog);
            });
        });
    },
    setTime() {
      setTimeout(() => {
        this.flag = true;
      }, 4000);
    },
    getinfo() {
      console.log("1" + this.id);
      axios.get("https://novel.juhe.im/book-info/" + this.id).then(res => {
        // console.log(1)
        // console.log(res);
        this.bookinfo = res.data;
        this.cover = res.data.cover;
        this.value = res.data.rating.score / 2;
        this.tags = res.data.tags;
      });
      axios.get("https://novel.juhe.im/recommend/" + this.id).then(res => {
        // console.log(res)
        this.recommendBooklist = res.data.books;
      });
      axios
        .get(`https://novel.juhe.im/author-books?author=${this.author}`)
        .then(res => {
          this.authorBooklist = res.data.books;
          //   console.log(res.data.books);
        });
      axios
        .get(`https://novel.juhe.im/book/reviews?book=${this.id}`)
        .then(res => {
          console.log(1);
          console.log(res);
          this.comment = res.data.reviews;
          console.log(this.comment);
        });
      this.setTime();
    }
  }
};
</script>
