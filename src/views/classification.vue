
  <template >
  <van-tree-select  height="100%" :items="items" :main-active-index.sync="activeIndex">
    <template slot="content">
      <div class="navActive">

        <div v-if="activeIndex === 0" >
          <van-divider>女生</van-divider>
          <div class="bookBox">
            <div v-for="item in femalelist" :key="item.id" class="itembox">
              <router-link :to="'/femaleclass/'+item.name+'/3'" class="gdyq">

                <div class="wordBox">
                  <h6>{{item.name}}</h6>
                  <i>1{{item.bookCount}}本</i>
                </div>
                <div class="picBox">
                  <img :src="`http://statics.zhuishushenqi.com${item.bookCover[0]}`" />
                </div>
                
              </router-link>
            </div>
          </div>
        </div>

        <div v-if="activeIndex === 1">
          <van-divider>男生</van-divider>
          <div class="bookBox">
            <div v-for="item in malelist" :key="item.id" class="itembox">
              <router-link :to="'/maleclass/'+item.name+'/3'" class="gdyq">

              <div class="wordBox">
                <h6>{{item.name}}</h6>
                <i>1{{item.bookCount}}本</i>
                </div>

                <div class="picBox">
                <img :src="`http://statics.zhuishushenqi.com${item.bookCover[0]}`" />
                </div>

              </router-link>
            </div>
          </div>
        </div>

        <div v-if="activeIndex === 2">
          <van-divider>幻想</van-divider>
          <div class="bookBox">
            <div v-for="item in picturelist" :key="item.id"  class="itembox">
              <router-link :to="'/pictureclass/'+item.name+'/3'" class="gdyq">
               
                <div class="wordBox">
                  <h6>{{item.name}}</h6>
                  <i>{{item.bookCount}}本</i>
                </div>

                <div class="picBox">
                  <img :src="`http://statics.zhuishushenqi.com${item.bookCover[0]}`" />
                </div>
              </router-link>
            </div>
          </div>
        </div>

        <div v-if="activeIndex === 3">
          <van-divider>社会</van-divider>

          <div class="bookBox">
            <div v-for="item in presslist" :key="item.id"  class="itembox">
              <router-link :to="'/pressclass/'+item.name+'/3'" class="gdyq">

              <div class="wordBox">
                <h6>{{item.name}}</h6>
                <i>{{item.bookCount}}本</i>
                </div>

                <div class="picBox">
                <img :src="`http://statics.zhuishushenqi.com${item.bookCover[0]}`" />
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </template>
  </van-tree-select>
</template>



<style lang="less">
.van-tree-select>.van-tree-select__nav{
  width: 33%
}
.booklist {
  position: relative;
  height: 100%;
  overflow: auto;
}

.navActive {
  border-left: 1px solid #ccc;
  margin: auto;
}

.bookBox{
  display: flex;
  flex-flow: wrap;
  width: 100%;
  margin-left: 0;

}
.itembox{
  margin:2px;
  width: 48%
}
.gdyq {
  // width: 180px;
  height: 60px;
  display: flex;
  flex-flow: wrap;
  background-color: rgb(250, 245, 247);
}
.wordBox{
  width: 60%;
  height: 60px;
  flex: 1;
  line-height: 60px;
  position: relative;
}
.wordBox>h6{
  color: black;
  margin-bottom: 0px;
  margin-top: 10px;
}
i{
  font-size: 8px;
  color: rgba(164, 168, 168, 0.788);
  position: absolute;
  top: 10px;
  margin-left: -50%;
  text-align: center;
  height: 20px;

}
img {
  height: 50px;
  width: 100%;
  margin-top: 5px;
  margin-right: 2px
}
.picBox{
  width: 37%;
  height: 60px;
  
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
      activeIndex: 0,
      items: [
        { text: "女生" },
        { text: "男生" },
        { text: "幻想" },
        { text: "社会" }
      ],
      femalelist: [],
      malelist: [],
      picturelist: [],
      presslist: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get("https://novel.juhe.im/categories").then(reg => {
        // console.log(1);
        // console.log(reg);
        this.femalelist = reg.data.female;
        this.malelist = reg.data.male;
        this.picturelist = reg.data.picture;
        this.presslist = reg.data.press;
        // console.log(this.booklist);
      });
      //   axios.get("https://novel.juhe.im/category-info?major=同人").then(ret => {
      //     console.log(1);
      //     console.log(ret);

      //   });
    }
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>


