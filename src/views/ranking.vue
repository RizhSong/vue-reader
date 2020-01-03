<template>
  <div class="rank-list">
    <top class="top" title="排行" backgroundcolor="red" color="red"></top>
    <van-tabs v-model="active" @click="getrankclass">
      <van-tab title="男生"></van-tab>
      <van-tab title="女生"></van-tab>
      <van-tab title="出版"></van-tab>
    </van-tabs>
    <div class="rank-content">
      <van-sidebar v-model="activeKey" class="rank-one">
        <van-sidebar-item
          v-for="item in ranklist"
          :key="item.id"
          :title="item.shortTitle"
          @click="getrank(item._id)"
        />
      </van-sidebar>
      <div class="rank-two">
        <div v-if="loading">
          <van-loading />
          <van-loading type="spinner" />
        </div>
        <van-row class="book" v-for="(item,idx) in booklist" :key="item.cover">
          <router-link :to="'/bookinfo1/'+item._id+'/'+item.author" tag="div">
            <van-col class="book1" span="5">
              <img class="rank-img"  v-lazy="`http://statics.zhuishushenqi.com${item.cover}`" />
            </van-col>
            <van-col span="1"></van-col>
            <van-col class="title" span="18">
              <div class="h4">{{idx+1}}.{{item.title}}</div>
              <p class="rank-book">{{item.shortIntro}}</p>

              <van-row type="flex" justify="space-between">
                <van-col  class="author" span="12">
                  <span>{{item.author}}</span>
                </van-col>
                <van-col class="tag" span="12">
                  <van-tag round>{{item.majorCate}}</van-tag>
                </van-col>
              </van-row>
            </van-col>
          </router-link>
        </van-row>

        <!-- <div v-for="(item,i) in booklist" :key="i">
            {{item.title}}
        </div>-->

        <!-- <van-row class="bb">
          <van-col class="cc" span="6">
            <van-sidebar v-model="activeKey" v-if="femalelist.length>0">
              <van-sidebar-item
                v-for="item in femalelist"
                :key="item.id"
                :title="item.shortTitle"
                @click="getrank(item._id,0)"
              />
            </van-sidebar>
          </van-col>
        <van-col class="dd" span="18" v-if="femaleBook.length>0">-->

        <!-- <van-row class="book" v-for="(item,idx) in femaleBook" :key="item.cover">
              <router-link :to="'/bookinfo1/'+item._id+'/'+item.author" tag="div">
                <van-col class="book1" span="5">
                  <img class="img" :src="`http://statics.zhuishushenqi.com${item.cover}`" />
                </van-col>
                <van-col span="1"></van-col>
                <van-col class="book1" span="18">
                  <div class="bookTwo1">
                    <h2>{{idx+1}}.{{item.title}}</h2>
                  </div>
                  <div class="bookTwo2">
                    <p>{{item.shortIntro}}</p>
                  </div>
                  <div class="bookTwo3">
                    <div>
                      <span>{{item.author}}</span>
                    </div>
                    <div>
                      <van-tag round>{{item.majorCate}}</van-tag>
                      <van-tag round>{{item.minorCate}}</van-tag>
                    </div>
                  </div>
                </van-col>
              </router-link>
        </van-row>-->

        <!-- <div class="one-class" v-for="item in list" :key="item.id" :title="item.title">
          <router-link :to="'/classlist/'+item.name+'/'+classname" tag="div" class="oneclassnext1">
            <img class="classimg" :src="`http://statics.zhuishushenqi.com${item.bookCover[0]}`" />
          </router-link>
          <div class="oneclassnext2">
            <div class="classname">
              <p>{{item.name}}</p>
              <p>{{item.bookCount}}</p>
            </div>
          </div>
        </div>-->
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { log } from "util";

export default {
  data() {
    return {
      active: 0,
      activeKey: 0,
      ranklist: [],
      malelist: [],
      epublist: [],
      booklist: [],
      loading:true,
    };
  },
  created() {
    this.getRanking();
  },
  methods: {


    getRanking() {
      axios.get("https://novel.juhe.im/rank-category").then(res => {
        console.log(res);
        this.malelist = res.data.male;
        this.femalelist = res.data.female;
        this.epublist = res.data.epub;
        this.ranklist = this.malelist;
        this.getrank(this.ranklist[0]._id, 0);
      });
    },
    getrankclass(name, title) {
      console.log(1);
      if (title == "男生") {
        this.ranklist = this.malelist;
        this.getrank(this.ranklist[0]._id, 0);
        this.activeKey = 0;
      } else if (title == "女生") {
        //  console.log(1121212)
        this.ranklist = this.femalelist;
        this.getrank(this.femalelist[0]._id, 0);
        this.activeKey = 0;
      } else if (title == "出版") {
        
        this.ranklist = this.epublist;
        this.getrank(this.epublist[0]._id, 0);
        this.activeKey = 0;
      }
    },
    getrank(id, type) {
      this.loading=true;
      this.booklist=[]
      console.log(id);
      axios.get(`https://novel.juhe.im/rank/${id}`).then(res => {
        console.log(111);
        console.log(res.data.ranking.books.title);
        this.booklist = res.data.ranking.books;
        this.loading=false
      });
    }
  }
};
</script>
<style lang="less" scoped>
.author {
  font-size: 12px
}
.van-row {
  padding: 0;
}
.book {
  padding: 5px 10px;
}
.title {
  text-align: left;
  padding-left: 5px;
}
.tag {
  text-align: right;
  font-size: 12px;
  background: #eee
}
.h4 {
  height: 20px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1; //文本行数
  overflow: hidden;
  font-size: 15px;
  font-weight: 700;
}
.rank-book {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; //文本行数
  overflow: hidden;
  font-size: 14px;
}
.rank-img {
  height: 100px;
  width: 68px;
}
.rank-list {
  height: 100%;
}
.rank-content {
  height: 100%;
}
.rank-one {
  height: 100%;
  overflow: auto;
}
.rank-content {
  width: 100%;
  height: calc(100%);
  display: flex;
  flex-direction: row;
  overflow: auto;
}
.rank-one {
  background-color: #fff;
  flex: 2;
}
.rank-two {
  // padding-left: 5px;
  // width: 100%;
  height: 100%;
  overflow: auto;
  flex: 9;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  background-color: #eee
}
</style>