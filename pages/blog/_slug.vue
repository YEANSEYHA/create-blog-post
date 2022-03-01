<template>
  <article>
      <Header></Header>
      <nuxt-content :document="article"></nuxt-content>
  </article>
</template>

<script>
export default {
    async asyncData ({ $content, params}){
        const article = await $content('blog', params.slug).fetch();

        return {article};
    }
}
</script>

<style>

</style>