<template>
  <div class="bg-zinc-300">
    <Header></Header>
    <AppSearchInput />
    <h1 class="text-center" >Blog Posts</h1>
    <br>
    <br>
    <div class="grid lg:grid-cols-3 gap-5  ">
      <div class="" v-for="article of articles" :key="article.slug">
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
          <h2 class="text-center p-5">{{ article.title }}</h2>
          <img class="mx-auto m-5" :src="article.img" width="500px" />
          <div>
            <p class="text-left">{{ article.description }}</p>
            <p class="text-left mt-5">by {{ article.author.name }}</p>
            
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
