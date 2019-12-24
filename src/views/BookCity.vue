<template>
  <div class="bookCity-content">
    <div class="mui-scroll-wrapper">
      <div class="mui-scroll">
        <div class="search_bar">
        <!-- 搜索框 -->
        <!-- <router-link to="Bookcase/search"> -->
        <!-- <svg class="icon icon_fangdajing" aria-hidden="true" >
                  <use xlink:href="#iconfangdajing" />
                </svg> -->
          <input type="text" class="search_put" placeholder="搜索" >
          
        <!-- </router-link> -->
        <svg class="icon icon_fenlei" aria-hidden="true" @click="goClassification">
                  <use xlink:href="#iconleimupinleifenleileibie3" />
                </svg>
                <p>分类</p>
        </div>
      <!-- <mt-search v-model="value">
  <mt-cell
    v-for="item in result"
    :title="item.title"
    :value="item.value">
  </mt-cell>
</mt-search> -->



        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
          <mt-swipe-item>
            <img src="@/images/lunbo11.jpg" alt />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="@/images/lunbo22.jpg" alt />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="@/images/lunbo33.jpg" alt />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="@/images/lunbo55.jpg" alt />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="@/images/lunbo4.jpg" alt />
          </mt-swipe-item>
        </mt-swipe>
        <!-- 热门和导航 -->
        <div>
          <!-- <h1>热门搜索</h1> -->

          <div class>
            <ul class>
              <li>
                <svg class="icon icon_bookcity" aria-hidden="true">
                  <use xlink:href="#iconpaihang7" />
                </svg>
                <router-link to="/ranking">
                  排行
                </router-link>
              </li>

              <li>
                <svg class="icon icon_bookcity" aria-hidden="true">
                  <use xlink:href="#iconshudan-" />
                </svg>
                <router-link to="/booklist">
                  书单
                </router-link>
              </li>

              <li>
                <svg class="icon icon_bookcity" aria-hidden="true">
                  <use xlink:href="#iconwanben2" />
                </svg>

                <a href>完本</a>
              </li>

              <li>
                <svg class="icon icon_bookcity" aria-hidden="true">
                  <use xlink:href="#iconchangxiaoshu" />
                </svg>
                <a href>大神红文</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="hot_book">
          <h4>一热门书籍推荐</h4>
          <a href="#">更多</a>
          <a class="mui-icon mui-icon-arrowright"></a>
        </div>
        <div class="img_hot">
          <img src="@/images/00.jpg" alt />
        </div>

        
        <div class="hot_book">
          <h4>免费专区</h4>
          <a href="#">更多</a>
          <a class="mui-icon mui-icon-arrowright"></a>
        </div>

        <div class="img_hot">
          <img src="@/images/00.jpg" alt />
        </div>
        <div class="img_4">
          <img src="@/images/4a.jpg" alt />
        </div>

        <ul class="list">
          <li style="width:100%;">
            <div class="hot_book">
              <h4>完本精选</h4>
              <a href="#">更多</a>
              <a class="mui-icon mui-icon-arrowright"></a>
            </div>
            <div class="img_hot">
              <img src="@/images/bb.jpg" alt />
            </div>
          </li>
          <li>
            <div class="hot_book">
              <h4>火热新书</h4>
              <a href="#">更多</a>
              <a class="mui-icon mui-icon-arrowright"></a>
            </div>

            <div class="img_hot">
              <img src="@/images/hot.jpg" alt />
            </div>
          </li>
          <li>
            <div class="hot_book">
              <h4>都市</h4>
              <a href="#">更多</a>
              <a class="mui-icon mui-icon-arrowright"></a>
            </div>

            <div class="img_hot">
              <img src="@/images/dd.jpg" alt />
            </div>
          </li>
          <li>
            <div class="hot_book">
              <h4>现代言情</h4>
              <a href="#">更多</a>
              <a class="mui-icon mui-icon-arrowright"></a>
            </div>

            <div class="img_hot">
              <img src="@/images/ee.jpg" alt />
            </div>
          </li>
          <li>
            <div class="hot_book">
              <h4>玄幻</h4>
              <a href="#">更多</a>
              <a class="mui-icon mui-icon-arrowright"></a>
            </div>

            <div class="img_hot">
              <img src="@/images/a.jpg" alt />
            </div>
          </li>
          <li>
            <div class="hot_book">
              <h4>古代言情</h4>
              <a href="#">更多</a>
              <a class="mui-icon mui-icon-arrowright"></a>
            </div>

            <div class="img_hot">
              <img src="@/images/b.jpg" alt />
            </div>
          </li>
        </ul>

        <div class="hot_book">
          <h4>原创推荐</h4>
          <a href="#">更多</a>
          <a class="mui-icon mui-icon-arrowright"></a>
        </div>
        <div class="img_4">
          <img src="@/images/c.jpg" alt />
        </div>

        <div class="hot_book">
          <h4>精彩书评</h4>
          <a href="#">更多</a>
          <a class="mui-icon mui-icon-arrowright"></a>
        </div>
        <div class="img_4">
          <img src="@/images/yy.jpg" a34gb />
        </div>

        <div class="hot_book">
          <h4>精彩书评</h4>
          <a href="#">更多</a>
          <a class="mui-icon mui-icon-arrowright"></a>
        </div>
        <div class="img_4">
          <img src="@/images/k.jpg" alt />
        </div>

        <div class="hot_book">
          <h4>人气书荒回答</h4>
          <a href="#">更多</a>
          <a class="mui-icon mui-icon-arrowright"></a>
        </div>
        <div class="img_4">
          <img src="@/images/h.jpg" alt />
        </div>

        <div class="hot_book">
          <h4>猜你喜欢</h4>
          <a href="#">更多</a>
          <a class="mui-icon mui-icon-arrowright"></a>
        </div>
        <div class="img_love">
          <img src="@/images/xx.jpg" alt />
        </div>
        <div class="img_love">
          <img src="@/images/love.jpg" alt />
        </div>
        <div class="img_love">
          <img src="@/images/hh.jpg" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
* {
  margin: 0;
  border: 0;
  padding: 0;
  font-size: 13pt;
}
.bookCity-content {
  position: relative;
  height: 100%;
  overflow: hidden;
  background-color: white;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.search_bar{
  display:flex;
  margin-top:10px;
  margin-left:10px;
  
}
// .icon_fangdajing{
// width:1em;
// height:1em;

// margin-left:10px;
// }
// .mint-searchbar{
//   flex:2;
//   width:90%;
//   //margin:10px auto;
  

// }

.search_bar p{
 margin-left:10px;
  margin-top:10px;
  font-size:16px;
  color:red;
}
.mint-swipe {
  height: 100px;
  width: 95%;
  border-radius: 5px;
  overflow: hidden;
  margin: 10px auto;
  //background-color: white;
  box-shadow: 1px 1px 1px 2px gainsboro;
  margin-bottom: 15px;
}

.mint-swipe-item img {
  width: 100%;

  height: auto;
}
.search_put{
background-color:gainsboro;
border:none;
font-size:14px;
width:280px;

}
// .mint-search {
//   height: 100%;
// }
// .mint-searchbar {
//   padding-top: 10px;
//   // border: 1px solid #777
// }
a {
  text-decoration: none;

  font-size: 14px;
}
ul {
  display: flex;
}
ul li {
  display: inline;
  // float: left;
  padding: 10px;
  display: flex;
  flex-flow: column;
  align-items: center;
  flex: 1;
}
li a {
  color: grey;
}
.icon_bookcity {
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
}

.hot_book {
  display: flex;
  //margin-top: 20px;
  margin: 20px auto;
  align-content: center;
  border-bottom: 0.5px solid gainsboro;
  width: 95%;
  padding-bottom: 15px;
}
.hot_book h4 {
  flex: 2;
  text-align: left;
  margin-left: 10px;
}
.hot_book a {
  color: grey;
  font-size: 14px;
}
.img_hot {
  height: 250px;
  width: 100%;
  margin-bottom: 20px;
  border-bottom: 10px solid gainsboro;
}
.img_hot img {
  height: auto;
  width: 100%;
}
#silder1 {
  height: 250px;
}
#mui-scroll1 {
  padding: 15px 10px;
  height: 250px;
  width: 100%;
}
#mui-scroll1 img {
  height: 250px;
  width: 80%;
}
// .router-link-active {
//   text-decoration: none;
// }
.img_4 {
  height: 250px;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 20px;
  padding-top: 10px;
  //border-top: 1px solid grey;
  border-bottom: 10px solid gainsboro;
}
.img_4 img {
  height: auto;
  width: 100%;
}
.list {
  display: flex;
  flex-flow: column;
}
.list li {
  width: 100%;
  // margin-top: 20px;
}
.img_love {
  height: 450px;
  width: 100%px;
  margin-top: 0px;
}
.img_love img {
  height: auto;
  width: 100%;
}
.icon_fenlei{
  width:1.05em;
  height:1.05em;
  margin-left:10px;
  margin-top:10px;


}

</style>
<script>
import mui from "@/../lib/mui/js/mui.min.js";
import axios from "axios";
export default {
  data() {
    return {
      
    }
  },
  methods: {
    
    goClassification(){
      this.$router.push("/classification");
    }
     },
  
  created() {},
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>

