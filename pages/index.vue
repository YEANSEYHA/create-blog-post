<template>
  <div class="bg-gray-200">
    <!-- <div class="flex justify-center p-5 bg-orange-400">
      <AppSearchInput />
    </div> -->
    <h1 class="py-5 text-center font-serif" >Blog Posts</h1>
    <br>
    <br>
    <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-10">
      <div class="bg-white-100 rounded overflow-hidden shadow-md p-5" v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <h2 class="text-center p-5 font-serif">{{ article.title }}</h2>
          <img :src="article.img"  class="h-3/5" />
          <div class="mt-6">
            <p class="text-sm font-serif">{{ article.description }}</p>
            <div class=" bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full font-serif mt-6 p-2 ml-0 mb-2 ">
                <span>by {{ article.author.name }}</span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
  /* import {mapActions, mapGetters} from "vuex"; */

  export default {
   /*  mounted(){
      this.getArticles();
    },
    computed:{
      ...mapGetters("articles",{
        articles: "articles",
      })
    },
    methods:{
      ...mapActions("articles",{
        getArticles: "getArticles"
      }),

    }, */
    async asyncData({ $content, params }) {
      const articles = await $content('articles')
        .only(['title', 'description', 'img', 'slug', 'author'])
        .sortBy('createdAt', 'asc')
        .fetch()
        console.log(articles)
      return {
        articles
      }
    } 

    /* computed: mapState(['articles']),
    methods:{
      ...mapActions(['getArticles'])
    } */
  }
</script>

<style>

</style>
