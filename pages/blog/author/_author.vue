<template>
<div>
<div class="bg-gray-200 h-screen">
        <div class="p-10">
          <h1>Author: {{ authors[0].author.name }}</h1>
          <p>Bio: {{ authors[0].author.bio }}</p>
          
        </div>
      
    </div>


</div>


</template>

<script>
  import {mapGetters} from "vuex";
  export default {
    computed:{
      ...mapGetters({
        authors: "author/authors"
      })
    },
    mounted(){
      console.log(this.authors)
    },
    async asyncData({$content, store, params}){
      store.dispatch('author/getAuthor')
    },
    
    /* async asyncData({ $content, params }) {
      const articles = await $content('articles', params.slug)
        .where({
          'author.name': {
            $regex: [params.author, 'i']
          }
        })
        .without('body')
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
    }, */
    methods:{
      formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
    }
    
  }
</script>

<style>

</style>