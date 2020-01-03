<template>
  <div class="classname">
    <div>
      <top class="top" :title="name" backgroundcolor="white" color="red"></top>
      <van-tabs v-model="active" @click="tabs">
        <van-tab v-for="(item,i) in classlist" :key="i" :title="item"></van-tab>
      </van-tabs>
    </div>
    <div class="classname-conent">
      <div>
        <div v-if="loading">
          <van-loading />
          <van-loading type="spinner" />
        </div>

      
          <router-link type="flex" class="bookrow" v-for="item in datalist" :key="item.cover" :to="'/bookinfo1/'+item._id+'/'+item.author" tag="van-row">
            <van-col class="book1" span="5">
              <img class="img" v-lazy="`https://statics.zhuishushenqi.com${item.cover}` " />
            </van-col>
            <van-col span="1"></van-col>
            <van-col class="title" span="18">
              <div>
              <h4>{{item.title}}</h4>
              
                <span class>作者：{{item.author}}</span>
            
                
                
              </div>
              <div>
                <p class="book">{{item.shortIntro}}</p>
              </div>
              <div></div>
            </van-col>
          </router-link>

      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
// .name-list {
//   height: 100%;
// }
.title {
  text-align: left
}
.van-row{
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
  height: calc(100% - 44px);
  overflow: auto;
}
</style>

<script>
import axios from "axios";
import mui from "@/../lib/mui/js/mui.js";
export default {
  data() {
    return {
      name: this.$route.params.name,
      class: this.$route.params.class,
      active: 0,
      datalist: [],
      classlist: ["全部"],
      loading: true,
      num: 0
    };
  },
  created() {
    this.getStoryType();

    axios.get(`https://novel.juhe.im/sub-categories`).then(res => {
      console.log(111);
      // console.log(res)
      if (this.class == "male") {
        this.datalist = res.data.male;
      } else if (this.class == "female") {
        this.datalist = res.data.female;
      } else if (this.class == "picture") {
        this.datalist = res.data.picture;
      } else if (this.class == "press") {
        this.datalist = res.data.press;
      }
      // console.log(this.datalist)
      this.datalist.forEach(element => {
        if (element.major == this.name) {
          this.classlist = ["全部", ...element.mins];
        }
      });
      // console.log(this.classlist)
    });
  },
  mounted() {},
  methods: {
    getStoryType(minor) {
      console.log("eeee");
      let cat = minor || "";
      if (cat == "全部") {
        cat = "";
      }
      //   this.num = this.num +1

      //  const start = (this.num - 1) * 20
      //  console.log(start)
      const start = 0;

      axios
        .get(
          `https://novel.juhe.im/category-info?gender=${this.class}&type=hot&major=${this.name}&minor=${cat}&start=0&limit=50`
        )
        .then(res => {
          console.log("res");
          // console.log(res);
          console.log(this.datalist);
          this.datalist = [...res.data.books];
          this.loading = false;
        });
    },
    tabs(name, title) {
      console.log(title);
      this.datalist = [];
      this.loading = true;
      this.getStoryType(title);
    }
  }
};
</script>

