<template>
  <dv>
      <h1>Test Page</h1>
  </dv>
</template>

<script>
export default {
    mounted(){
        console.log(this.authors)
    },
    async asyncData ({ $content}){
        const authors = await $content('articles')

          .only(['author'])
          .sortBy('createdAt', 'asc')
          .fetch()
        return { authors};
    },
}
</script>

<style>

</style>