<template>
  <div class="booklist-content">
    <!-- 顶部滑动条区域
               参照MUI案例中的 tab-top-webview-main.html
    -->
    <top class="top" title="书单" backgroundcolor="white" color="red" back="返回"></top>

    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a class="mui-control-item mui-active" href="#">推荐</a>
              <a class="mui-control-item" href="#">男频</a>
              <a class="mui-control-item" href="#">女频</a>
          <a class="mui-control-item" href="#">出版</a>

        </div>
      </div>
    </div>

    <div class="images">
      <img src="@/images/booklist1.jpg" />
      <img src="@/images/booklist2.jpg" />
    </div>
    <div class="book_list">
      <div class="mui-scroll-wrapper">
        <div class="mui-scroll">
          <div v-for="item in booklists" :key="item._id" class="books">
            <router-link :to="'/BookListDetails/'+item._id" tag="div">
              <div class="book_content">
                <h5>{{item.title}}</h5>
                <!-- </router-link> -->

                <p>{{item.desc}}</p>
                <!-- <span>{{item.author}}</span> -->
                <span>{{item.bookCount}}本 | {{item.collectorCount}}收藏</span>
              </div>
              <div class="book_cover">
              <img :src="`http://statics.zhuishushenqi.com${item.cover}`"/>
              <img :src="`http://statics.zhuishushenqi.com${item.covers[0]}`"/>
              <img :src="`http://statics.zhuishushenqi.com${item.covers[1]}`" style="margin-left:15px;"/>
              </div>


            
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.booklist-content {
   overflow: hidden;
  // position: relative;
   height: 100%;
  font-family: Arial, Helvetica, sans-serif;
}
#sliderSegmentedControl {
  border-bottom: 1px solid #dddddd;
  background-color: white;
}
#sliderSegmentedControl a {
  margin-right: 15px;
  margin-left: 10px;
}
.book_list{
   overflow: hidden;
  position: relative;
  height: 100%;
}
.mint-header-title{
 // color:red;
  font-weight:bold;
}
.images {
  display: flex;

  background-color: white;
  margin-bottom: 8px;
  margin-top:10px;
  padding-top:15px;
  padding-bottom: 15px;
}
.images img {
  width: 180px;
  height: 80px;
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;
}
// .mui-bar-tab .mui-tab-item-llb.mui-active {
//   // color: #007aff;
// }

.mui-bar-tab .mui-tab-item-llb {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}

div a {
  padding: 10px;
}
.books {
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  background-color: white;
  border-bottom: 0.5px solid #929292;
  padding-top: 15px;
  padding-bottom: 15px;
}
.books p {
  margin-top: 15px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 25px;
  
}
.books img {
  
  
  // position: absolute;
  // bottom: 20px;
  // right: 10px;
  width: 60px;
  height: 90px;
  
}
.book_cover{
  width:140px;
  height:200px;
  flex: 1;
  display:flex;
  overflow: hidden;
  flex-flow: row nowrap;
  //text-align: right;
   position: absolute;
  bottom: -60px;
  right:5px;
  padding-top:15px;
 
}
.book_cover img:nth-child(2){
  
width:60px;
height:100px;
position:absolute;
right:25%;
 top:10px;
 margin-right:5px;


}

// img[lazy="loading"] {
//         width: 40px;
//         height: 300px;
//         margin: auto;
//     }
.book_content {
  flex:1;
  text-align: left;
  margin-right:160px;
  margin-left:10px;
}
.book_content p{
  font-size:14px;
  color:#aaaaaa;
}
.book_content h5 {
  font-size: 16px;
  color: black;
  text-align: left;
}
.book_content span {
  font-size: 12px;
  color: #aaaaaa;
}
</style>
<script>
// 1. 导入 mui 的js文件
import mui from "@/../lib/mui/js/mui.min.js";
import axios from "axios";
import { start } from "repl";

export default {
  data() {
    return {
      id: this.$route.params.id,
      total: this.$route.params.total,
      booklists: [],
    
    };
  },
  created() {
    this.getbooklist();


 
   },


 
  methods: {
    
    getbooklist() {
      axios.get("https://novel.juhe.im/booklists").then(res => {
        this.booklists = res.data.bookLists;
        console.log(this.booklists);
        
      });
    },
    
  
  },

  mounted() {
    // 当组件中的DOM结构被渲染好并放到页面中后，会执行这个钩子函数
    // 如果要操作元素最好在 mounted 里面，因为这里时候的DOM元素是最新的
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>
