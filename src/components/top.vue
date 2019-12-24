<template>
<!-- <div > -->
 
   <mt-header :title="title" :style="`backgroundColor:${backgroundcolor};color:${color}`" >
  <router-link to="/" slot="left">
    <mt-button  @click="goBack" icon="back">{{back}}</mt-button>
  </router-link>
  
  <mt-button slot="right">{{right}}</mt-button>
</mt-header>
    <!-- <div :style="`backgroundColor:${color}`"  @click="showTop">
        {{title}}
        <div v-if="$store.state.show" class="box"></div>
    </div> -->
    <!-- </div> -->

</template>
<script>
export default {
    data() {
        return {
        
        }
    },
    props:{
        'title':{
            type:String,
            default:"加载中..."
        },
        'backgroundcolor':{
            type:String,
            default:'#ccc'
        },
        'right':{
            type:String,
            
        },
        'color':{
            type:String,
            
        },
        'back':{
            type:String,
            
        },
     
    },
  methods:{
    showTop(){
      console.log(1);
      
      this.$store.commit('setShow',true)
    },
    goBack() {
        this.$router.go(-1)
    }
  },
  

}
</script>
<style lang="less" >

</style>