<template>
  <div class="container">
    <div class="booktype">
      <div id="slider" class="mui-slider mui-fullscreen">
        <div
          class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
          style="height:45px;overflow:scroll;">
          <div class="mui-scroll">
            <a href="#" class="all active">{{this.major}}</a>
            <span v-for="(item,i) in datalist" :key="i" class="itemBox">
              <a href="#" class="book" @click.prevent="getSubclass(item)">{{item}}</a>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="contentText" v-if="show_box">
      <!-- <div class="mui-scroll-wrapper"> -->
        <!-- <div class="mui-scroll"> -->
          <div class="contentText-list">
          <div v-for="(item,i) in sunlist " :key="i" tag="div" class="bookcase">
            <router-link :to="'/bookinfo1/'+item._id+'/'+item.author" tag="div" class="booklist">
              <div class="picbox">
                <img :src="`http://statics.zhuishushenqi.com${item.cover}`" />
              </div>
              <div class="detailbox">
                <div class="title">{{item.title}}</div>
                <br />
                <div class="shortIntro">{{item.shortIntro}}</div>

                <span class="image">
                  <img src="@/images/author.png" alt />
                </span>
                <span class="author">{{item.author}}</span>
 
                <span class="minorCate">{{item.minorCate}}</span>
 
                <span class="tag" >{{item.tags[0]}}</span>
                <br />
              </div>
            </router-link>
          </div>
        <!-- </div> -->
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<style lang="less" >
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
import mui from "@/../lib/mui/js/mui.js";
export default {
  data() {
    return {
      major: this.$route.params.id,
      num: 0,
      sunlist: [],
      active: 2,
      datalist: [],
      show_box: false
    };
  },
  created() {
    this.getStoryType();
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      scrollX: true, //是否横向滚动
      deceleration: 0.0005
    });
  },
  methods: {
    ddd(id) {
      console.log(id);
    },
    getSubclass(e) {
      let cat = e || "";

      this.show_box = false;
      axios
        .get(
          `https://novel.juhe.im/category-info?gender=picture&type=hot&major=${
            this.major
          }&minor=${cat}&start=${this.num}&limit=${this.num + 21}`
        )
        .then(res => {
          this.num = this.num;
          this.sunlist = [...res.data.books];
          this.show_box = true;
        });
    },
    getStoryType() {
      // https://novel.juhe.im/sub-categories

      axios.get(`https://novel.juhe.im/sub-categories`).then(res => {
        this.datalist = res.data.picture;
        res.data.picture.forEach(element => {
          if (element.major == this.major) {
            this.datalist = element.mins;
          }
        });
        this.getSubclass();

        // console.log(JSON.stringify(this.datalist),this.major)
      });
    }
  }
};
</script>

