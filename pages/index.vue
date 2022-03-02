<template>
  <div class="home-page">
    <Header></Header>
    <h2>Blog Posts</h2>
    <div class="articles">
      <div  class="article" v-for="article of articles" :key="article">
        <nuxt-link :to="{name: 'blog', params: {blog: article.blog}}">
            <img :src="article.img" :alt="article.alt" width="500px" />
        </nuxt-link>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ $content, params}){
    const articles = await $content('articles', params.slug).fetch();
    
    return{
      articles
    }
  }
}
</script>
