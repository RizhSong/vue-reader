
  <template >
  <div class="class-list">
    <top class="top" title="分类" backgroundcolor="white" color="red"></top>

    <div class="class-content">
      <van-sidebar v-model="activeKey" class="class-one">
        <van-sidebar-item title="男生" @click="getList(1)" />
        <van-sidebar-item title="女生" @click="getList(2)" />
        <van-sidebar-item title="出版" @click="getList(3)" />
        <van-sidebar-item title="动漫" @click="getList(4)" />
      </van-sidebar>
      <div class="class-two">
        <div class="one-class" v-for="item in list" :key="item.id" :title="item.title">
          <router-link :to="'/classlist/'+item.name+'/'+classname" tag="div" class="oneclassnext1">
            <img class="classimg" :src="`http://statics.zhuishushenqi.com${item.bookCover[0]}`" />
          </router-link>
          <div class="oneclassnext2">
            <div class="classname">
              <p>{{item.name}}</p>
              <p>{{item.bookCount}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
img {
  padding: 0;
}
.class-list {
  height: 100%;
}
.class-content {
  width: 100%;
  height:100%;
  display: flex;
  flex-direction: row;
  overflow: auto;
}
.class-one {
  background-color: #fff;
  flex: 2;
}
.class-two {
  // width: 100%;
  padding-top: 10px;
  height: 100%;
  overflow: auto;
  flex: 11;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
}
.classimg {
  height: 90px;
  width: 70px;
}
.one-class {
  // height: 100px;
  overflow: hidden;
  width: 50%;
  display: flex;

  flex-direction: row;

  // align-content:flex-start
}
.classname {
  height: 50px;
  margin-top: 20px;
}
.oneclassnext1 {
  flex: 1;
  margin-bottom: 10px;
}
.oneclassnext2 {
  // padding-top: 30px;
  flex: 1;
}
</style>

<script>
import Vue from "vue";

import mui from "../../lib/mui/js/mui.js";
// import mui from "@/../lib/mui/js/mui.js";
import axios from "axios";
export default {
  data() {
    return {
      femalelist: [],
      malelist: [],
      picturelist: [],
      presslist: [],
      activeKey: 0,
      list: [],
      classname: "male"
    };
  },

  created() {
    this.getData(1);
  },
  methods: {
    getData(id) {
      axios.get("https://novel.juhe.im/categories").then(reg => {
        this.femalelist = reg.data.female;
        this.malelist = reg.data.male;
        this.picturelist = reg.data.picture;
        this.presslist = reg.data.press;
        this.list = this.malelist;
        console.log(this.malelist);
      });
    },
    getList(id) {
      this.list = [];
      this.list = this.femalelist;
      if (id == 1) {
        this.classname = "male";
        this.list = this.malelist;
      } else if (id == 2) {
        this.classname = "female";
        this.list = [];
        this.list = this.femalelist;
      } else if (id == 3) {
        this.classname = "press";
        this.list = this.presslist;
      } else if (id == 4) {
        this.classname = "picture";
        this.list = this.picturelist;
      }
      console.log(this.list);
    }
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>


