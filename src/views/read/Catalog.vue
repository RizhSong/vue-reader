<template>
    <div class="list">
        <div v-for="(item,idx) in Catalog" :key="idx" >
            {{idx + 1}}. {{item.title}}
        </div>
    </div>
</template>
<style lang="less">
   .list {
      overflow-y:scroll
   }

</style>
<script>
import axios from "axios"
export default {
    data() {
        return {
            id:this.$route.params.id,
            sourceId:"",
            Catalog:[]

        }
    },
    created() {
        this.getCatalog()

    },
    methods: {
        getCatalog() {
             axios.get(`https://novel.juhe.im/book-sources?view=summary&book=${this.id}`).then(res=>{
                console.log(res)
                this.sourceId=res.data[0]._id
                 axios.get(`https://novel.juhe.im/book-chapters/${this.sourceId}`).then(res=>{
                     console.log(res)
                     this.Catalog = res.data.chapters
                     console.log(this.Catalog)

                 })
        })
        }
    
}
}
</script>