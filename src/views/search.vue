<template>
    <div>
       <mt-search v-model="nn"  ref="searchBox" placeholder="搜索"></mt-search>
    </div>
</template>
<script>
export default {
    data() {
        return {
            nn:""

        }
    },
    created(){},
    
   
    mounted () {
        document.getElementsByClassName('mint-searchbar-core')[0].focus()
    //  this.$refs.searchBox.focus();
       console.log(this.$refs.searchBox)
    }
}
</script>