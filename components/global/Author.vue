<template>
  <div>
    <NuxtLink :to="`/blog/author/${author.name}`">
    <img :src="author.image" width="100px" />
    <div>
      <h4 class="mb-5">Author: {{ author.name }}</h4>
      <p>{{ author.bio }}</p>
    </div>
  </NuxtLink>
  </div>
</template>

<script>
  export default {
    props: {
      author: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style>

</style>