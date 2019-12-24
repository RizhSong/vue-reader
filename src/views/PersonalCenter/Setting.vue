<template>
  <div class="setting_cotent">
    <div class="mui-scroll-wrapper">
      <div class="mui-scroll">
         <top class="top" title="设置" backgroundcolor="white" color="red" back="返回"></top>
        <ul class="mui-table-view">
          <!-- <li class="mui-table-view-cell">
               
            <a href class="title">设置</a>
          </li> -->
          <li class="mui-table-view-cell">
            <div class="mui-navigate-right" @click="actionSheet">
              <span>书架排序</span>
              <span class="span2" ref="rank">按最近阅读</span>
            </div>
            <mt-actionsheet :actions="data" v-model="sheetVisible"></mt-actionsheet>
          </li>
          <li class="mui-table-view-cell">
            <div>系统消息通知</div>
            <div class="mui-switch mui-switch-blue mui-switch-mini">
              <div class="mui-switch-handle"></div>
            </div>
          </li>
          <li class="mui-table-view-cell">
            <div>省流量模式(无头像)</div>
            <div class="mui-switch mui-switch-blue mui-active mui-switch-mini">
              <div class="mui-switch-handle"></div>
            </div>
          </li>
          <li class="mui-table-view-cell">
            <a href class="title">更多</a>
          </li>
          <li class="mui-table-view-cell">
            <div>
              清理网络缓存
              <span class="span3">0B</span>
            </div>
            <dialogConfirm :show-dialog="showDialog" :ok-text="'删除'" :cancel-text="'取消'" :content="'content'" v-on:confirm="confirmFn" v-on:cancel="cancelFn" :hide-confirm="false"></dialogConfirm>


          
          </li> 
          <li class="mui-table-view-cell">
            <div>加入我们</div>
          </li>

          <li class="mui-table-view-cell">
            <div>网络诊断</div>
          </li>
          <li class="mui-table-view-cell">
            <div>关于我们</div>
          </li>
         
        </ul> 
         <div class="version">version 2.8</div>
      </div>
    </div>
  </div>
</template>
<script>
import mui from "@/../lib/mui/js/mui.min.js";
import dialogConfirm from "@/./components/box.vue";

export default {
  //name: "hello",
  data() {
    return {
      // action sheet 选项内容
      data: [
        {
          name: "按最近阅读",
          method: this.getRecentTime // 调用methods中的函数
        },
        {
          name: "按时间更新",
          method: this.getTimeUpdate // 调用methods中的函数
        }
      ],
      // action sheet 默认不显示，为false。操作sheetVisible可以控制显示与隐藏
      sheetVisible: false
    };
  },
   components:{
     //注册组件
     dialogConfirm
  },
  methods: {
    actionSheet: function() {
      // 打开action sheet
      this.sheetVisible = true;
    },
    getRecentTime() {
      this.$refs.rank.innerText = "按时间更新";
      console.log(this);
    },
    getTimeUpdate() {
      this.$refs.rank.innerText = "按最近阅读";
    },

  },

  created() {
     
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    let rankmessage = this.$refs.rank;
  }
};
</script>
<style lang="less" scoped>
.setting_cotent {
  position: relative;
  height: 100%;
  overflow: hidden;
  font-family:Arial, Helvetica, sans-serif;
}
.title {
  font-weight: bold;
  text-align: left;
  margin-top: 30px;
  margin-left: 10px;
  font-size: 20px;
}
.mui-table-view-cell {
  width: 100%;
  text-align: left;
  padding-top: 15px;
  padding-bottom: 15px;
}
.span2 {
  font-size: 14px;
  margin-left: 165px;
  color: grey;
}
.span3 {
  font-size: 14px;
  margin-left: 215px;
  color: grey;
}
.version {
  font-size: 14px;
  color: grey;
  height: 590px;
  background-color: white;
  padding-top:100px;
}

</style>
