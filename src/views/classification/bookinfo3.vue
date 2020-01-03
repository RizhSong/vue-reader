<template>
  <div class="list">
     <top class="top" title="书架" backgroundcolor="white" color="red" back="返回"></top>
       <div v-if="loading">
          <van-loading />
          <van-loading type="spinner" />
        </div>
     <div v-if="!loading">
     <div class="selec">不积跬步，无以至千里；不积小流，无以成江海。　——荀况 </div>
   <router-link :to="'/read/'+this.idx" tag="div" class="selctop">继续阅读></router-link>
      <router-link :to="'/read/'+0" tag="div" class="selcbuttom">重新开始</router-link>
      </div>
    
      
 
  </div>
</template>
<style lang="less">
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
      flag:false,
      idx:this.$route.params.idx,
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
     
      this.$store.commit("getIdx", idx);
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
              console.log(this.Catalog);
              this.loading=false;
            });
        });
    },
    setTime(){
      setTimeout(() => {
        this.flag=true
      }, 4000);
    },
    getinfo() {
      console.log("1"+this.id)
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
        this.setTime()
        
    }
  }
};
</script>

<style lang="less" scoped>
.selec {
  margin-top: 100px;
  margin-bottom: 50px;
}
.list {
  // height: ;
  overflow: auto;
}
.selctop {
  margin: 10px;
  color:#666;
  font-size: 2em;
  height: 200px;
  line-height: 200px;
  background: url(../../../lib/images/top1.jpg);
  background-size: cover
  
}
.selcbuttom {
  margin: 10px;
   color:white;
  font-size: 2em;
  height: 200px;
  line-height: 200px;
  background: url(../../../lib/images/top.jpeg);
  background-size: cover
  
}
// .selcbook {
//    margin: 10px;
//    color:red;
//   font-size: 2em;
//   height: 200px;
//   line-height: 200px;
//   background: url(../../../lib/images/top2.jpg);
//   background-size: cover
// }
</style>