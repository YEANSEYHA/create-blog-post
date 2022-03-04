<template>
<div>
  
  <div class="grid lg:grid-cols-2 gap-10 p-10 bg-zinc-300">
    <div>
      <img :src="article.img" :alt="article.alt" width="600px" />
    </div>

    <div>
      <h1 class="text-left mb-10 font-serif">Title: {{ article.title }}</h1>
        <p class="mb-5">{{ article.description }}</p>
        <p class="mb-5">Article last updated: {{ formatDate(article.updatedAt) }}</p>
        <author :author="article.author" />
    </div>
  </div>
  <div class="p-5">
    <nuxt-content :document="article"/>
    <prev-next :prev="prev" :next="next" />
  </div>

</div>



</template>

<script>
export default {
    async asyncData ({ $content, params}){
        const article = await $content('articles', params.slug).fetch()

        const [prev, next] = await $content('articles')
          .only(['title', 'slug'])
          .sortBy('createdAt', 'asc')
          .surround(params.slug)
          .fetch()
        return { article, prev, next };
    },
    methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
 }
    
}
</script>


<style>
  .nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
  }
  .nuxt-content p {
    margin-bottom: 20px;
  }

  .icon.icon-link {
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}


</style>