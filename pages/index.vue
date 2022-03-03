<template>
  <div class="bg-zinc-300">
    <Header></Header>
    <AppSearchInput />
    <h1 class="text-center" >Blog Posts</h1>
    <br>
    <br>
    <div class="grid lg:grid-cols-3 gap-10">
      <div class="bg-white-100 rounded overflow-hidden shadow-md" v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <h2 class="text-center p-5">{{ article.title }}</h2>
          <img class="w-200" :src="article.img"  />
          <div>
            <p class="text-sm ">{{ article.description }}</p>
            <div class=" bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 ml-0 mb-5 ">
                <span>by {{ article.author.name }}</span>
            </div>
            
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const articles = await $content('articles')
        .only(['title', 'description', 'img', 'slug', 'author'])
        .sortBy('createdAt', 'asc')
        .fetch()

      return {
        articles
      }
    }
  }
</script>

<style>

</style>
