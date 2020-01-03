<template>
  <div ref="list" class="read-list list1" @click.stop="changePage">
    <div :class="[fontsize,readlist,linehight]">
      <div :class="{'readlistone':isPattern}">
        <div class="getshow"></div>
        <div class="readtop">
          <van-nav-bar
            class="navbar"
            v-show="flag"
            :title="bookcase.title"
            left-text="返回"
            right-text="下一章"
            left-arrow
            @click-left="goBack"
            @click-right="getread(1
            
            )"
          ></van-nav-bar>
        </div>
        <a href name="top"></a>
        <div class="wordtitle">
          <h3>{{conent.title}}</h3>
        </div>
        <div class="spancword" id="innerHTML">{{conent.cpContent}}</div>
        <div class="s"></div>
        <!-- <van-button type="primary" @click="getread(1) "><a href="#top">下一章</a></van-button> -->
        <!-- <a class="casea" href="#top" @click="getread(1) " >下一章</a> -->
        <div></div>
        <van-tabbar class="redbottom" v-show="flag" v-model="active">
          <!-- <van-tabbar-item ico="orders-o">
    自定义
    <img
      slot="icon"
      slot-scope="props"
      :src="props.active ? icon.active : icon.inactive"
    >
          </van-tabbar-item>-->
          <van-tabbar-item @click="showPopup" icon="bars">目录</van-tabbar-item>
          <van-tabbar-item @click.stop="Pattern" v-if="flagone" icon="browsing-history-o">模式</van-tabbar-item>
          <van-tabbar-item @click.stop="Pattern" v-if="!flagone" icon="browsing-history">模式</van-tabbar-item>
          <van-tabbar-item @click.stop="showshez" icon="setting-o">设置</van-tabbar-item>
          <van-tabbar-item @click.stop="addcase" icon="chart-trending-o">加入书架</van-tabbar-item>
        </van-tabbar>
      </div>
    </div>

    <van-popup
      v-model="show"
      @click="gethidden"
      position="left"
      :style="{ width: '80%' ,height: '100%' }"
    >
      <div
        class="chapter"
        v-for="(item,idx) in Catalog"
        :key="idx"
        @click="postidx(idx-1)"
      >{{idx + 1}}.{{item.title}}</div>
    </van-popup>
    <van-popup
      v-model="bshow"
      position="bottom"
      :style="{ width: '100%' ,height: '40%' }"
      :overlay="false"
      :closeable="true"
    >
      <van-row class="aab">
        <van-col class="abb2" span="8" @click.stop="fontm">Aa-</van-col>

        <van-col class="abb1" span="8">{{num}}</van-col>
        <van-col class="abb2" span="8" @click.stop="fontadd">Aa+</van-col>
      </van-row>
      <van-row class="aabone" type="flex" justify="space-around">
        <van-col span="6" @click.stop="changecolor(1)" class="aabone1">米黄</van-col>
        <van-col span="6" @click.stop="changecolor(2)" class="aabone2">粉色</van-col>
        <van-col span="6" @click.stop="changecolor(3)" class="aabone3">黑色</van-col>
      </van-row>
      <van-row class="aabone" type="flex" justify="space-around">
        <van-col span="6" @click.stop="changeline(1)" class="aabone">一</van-col>
        <van-col span="6" @click.stop="changeline(2)" class="aabone">二</van-col>
        <van-col span="6" @click.stop="changeline(3)" class="aabone">三</van-col>
      </van-row>

      <!-- <van-col span="6"><div>Aa4</div></van-col> -->

      <!-- 
   <van-row class="backcolor">


   <van-col span="6" class="backcolor1"><div ></div></van-col>
   <van-col span="6" class="backcolor2"><div ></div></van-col>
   <van-col span="6" class="backcolor3"><div ></div></van-col>
  <van-col span="6">Aa3</van-col>
      <van-col span="6">Aa4</van-col>-->
    </van-popup>
  </div>
</template>

<script>
import axios from "axios";
import { log } from "util";
export default {
  data() {
    return {
      id: parseInt(this.$route.params.id) - 1,
      sourceId: "",
      li: "",
      conent: {},
      bookcase: {},
      show: false,
      bshow: false,
      Catalog: [],
      flag: false,
      flagone: true,
      red: "list",
      isPattern: false,
      active: 0,
      fontsize: `fontsize2`,
      num: 2,
      readlist: "readlist1",
      linehight: "linehight1"
      // falg:true
    };
  },
  created() {
    // console.log("created");
    // this.get()
    this.settime();
    // console.log("qq" + this.id);
    // console.log("qq" + this.$store.state.bookId);
    // console.log("qq" + this.$store.state.bookSourceId);
    // console.log("qq" + this.$store.state.bookCatalogList[1]);
  },
  beforeDestroy() {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaa");
    this.addcase();
  },
  methods: {
    changeline(idx) {
      if (idx == 2) {
        this.linehight = "linehight2";
      } else if (idx == 3) {
        this.linehight = "linehight3";
      } else {
        this.linehight = "linehight1";
      }
    },
    changecolor(idx) {
      console.log(1);
      if (idx == 2) {
        console.log(2222);
        this.readlist = "readlist2";
      } else if (idx == 3) {
        this.readlist = "readlist3";
      } else {
        this.readlist = "readlist1";
      }
    },
    fontm() {
      if (this.num > 1) {
        this.num--;
        this.fontsize = `fontsize${this.num}`;
      }
    },
    fontadd() {
      if (this.num < 5) {
        this.num++;
        this.fontsize = `fontsize${this.num}`;
      }
    },
    showshez() {
      this.bshow = true;
    },
    goBack() {
      this.$router.go(-1);
    },
    Pattern() {
      console.log(2);
      this.flagone = !this.flagone;
      this.isPattern = !this.isPattern;
    },
    gethidden() {
      this.show = false;
      console.log(1111888);
    },
    getshow() {
      this.flag = !this.flag;
    },
    postidx(idx) {
      this.id = idx;
      console.log(22);
      this.getread();
    },
    showPopup() {
      this.show = true;
    },
    changePage(e) {
      console.log(document.documentElement.clientWidth);
      console.log(document.documentElement.clientHeight);
      console.log(e);
      if (e.clientX > 375 * 0.66) {
        console.log(100);
        this.getread(1);
        this.$refs.list.scrollTop = 0;
      } else if (e.clientX < 375 * 0.33) {
        this.getread(100);
        this.$refs.list.scrollTop = 0;
      } else {
        this.getshow();
      }
    },
    // get(){
    //     this.$store.state.idx.forEach(item => {
    //         if(item.objbookId==this.$store.state.bookId){
    //             return  this.link=encodeURIComponent(this.$store.state.bookCatalogList[item.objidx].link)
    //         }else{
    //             return  this.link=encodeURIComponent(this.$store.state.bookCatalogList[0].link)
    //         }
    //         })
    //         },
    get() {
      //   console.log(this.$store.state.bookcase);
    },
    addcase() {
      // const bookcaseobj={
      //     bookId:this.$store.state.bookId,

      // }

      axios
        .get(`https://novel.juhe.im/book-info/${this.$store.state.bookId}`)
        .then(res => {
          this.bookcase = res.data;
          const obj = {
            _id: res.data._id,
            cover: res.data.cover,
            author: res.data.author,
            title: res.data.title,
            idx: this.id
          };
          this.$store.commit("addcase", obj);
          //    console.log(obj)
          // console.log('bookcase'+res.data)
        });
    },
    settime() {
      setTimeout(() => {
        // console.log(1);
        this.getread();
      }, 2000);
    },

    getread(idx) {
      axios
        .get(
          `https://novel.juhe.im/book-chapters/${this.$store.state.bookSourceId}`
        )
        .then(res => {
          console.log(22222);
          console.log(res.data);
          this.Catalog = res.data.chapters;
          //    console.log(obj)
          // console.log('bookcase'+res.data)
        });
      axios
        .get(`https://novel.juhe.im/book-info/${this.$store.state.bookId}`)
        .then(res => {
          this.bookcase = res.data;
          //    console.log(obj)
          // console.log('bookcase'+res.data)
        });
      //   this.falg=false;
      //   this.falg=true;
      if (idx == 100) {
        this.id -= 1;
      } else {
        this.id += 1;
      }
      console.log(this.id);
      this.li = encodeURIComponent(
        this.$store.state.bookCatalogList[this.id].link
      );

      axios.get(`https://novel.juhe.im/chapters/${this.li}`).then(res => {
        // console.log(1);
        // console.log(this.sourceId)
        console.log(res);
        // console.log(this.li);

        this.conent = res.data.chapter;
      });
    }
  }
};
</script>
<style lang="less">
// .getshow  {
//   height:50%;
//   width:100%;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   margin: auto;
//   background-color: red;

//   position: fixed;
//   // z-index: 1000000;

// }
// .contfont1 {
//
// }
.navbar i {
  top: 2px;
}
.redbottom {
  padding-bottom: 6px;
  // opacity: 0.75;
}
.redbottom .van-tabbar-item__icon {
  padding-left: 5px;
  margin-bottom: 10px;
}
.readtop {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  // opacity: 0.75;
}
.backcolor {
  margin: 20px;
  margin-left: 50px;
}
.backcolor:first-child {
  background-color: black;
}
.backcolor1 {
  width: 40px;
  height: 25px;
  background-color: black;
}

.wordtitle {
  padding-top: 10px;
}

.spancword {
  margin-top: 10px;
  padding-left: 8px;
  letter-spacing: 0.3em;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: left;
  text-indent: 2em;
  height: 100%;
  //  line-height: 25px;
}
.linehight1 {
  line-height: 1.5em;
}
.linehight2 {
  line-height: 2em;
}
.linehight3 {
  line-height: 2.5em;
}

.fontsize1 {
  // font-size: 25px;
}
.fontsize2 {
  font-size: 1.2em;
}
.fontsize3 {
  font-size: 1.5em;
}
.fontsize4 {
  font-size: 1.8em;
}
.fontsize5 {
  font-size: 2.5em;
}
.aabone {
  margin-top: 30px;
}
.aab {
  margin-top: 60px;
}
.aabone1 {
  background-color: #f7eed6;
}
.aabone2 {
  background-color: pink;
}
.aabone3 {
  color: white;
  background-color: black;
}

.aab1 {
  width: 23%;
  // height: 50px;
  margin: 5px;
  border: 1px black solid;
}
.vancol > div {
  background-color: red;
  margin: 5px;
  box-sizing: border-box;
}
.chapter {
  padding-left: 15px;
  text-align: left;
}

.read-list {
  height: calc(100% + 44px);
  overflow: auto;
  // height: calc(90% - 10px);
}

.readlist1 {
  background-color: #f7eed6;
}
.readlist2 {
  background-color: pink;
}
.readlist3 {
  background-color: black;
  color: white;
}
.readlistone {
  background-color: black;
  color: #ccc;
}

.casea {
  display: inline-block;
  height: 50px;
  width: 100%;
  background-color: #aaa;
  line-height: 50px;
  color: white;
}
</style>