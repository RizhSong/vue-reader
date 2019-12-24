<template>

    <div :style="`backgroundColor:${color}`"  @click="showTop">
        {{title}}
        <div v-if="$store.state.show" class="box"></div>
    </div>
</template>
<script>
export default {
    props:{
        'title':{
            type:String,
            default:2222
        },
        'color':{
            type:String,
            default:'#ccc'
        }
    },
  methods:{
    showTop(){
      console.log(1);
      
      this.$store.commit('setShow',true)
    }
  }
}
</script>
<style lang="css" scoped>
.box {
    width: 50px;
    height: 20px;
    background-color: red;
    position: absolute;
}
</style>