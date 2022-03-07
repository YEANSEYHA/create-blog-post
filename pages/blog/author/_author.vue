<template>
  <div>
    <div class="bg-gray-200 h-screen">
      <div class="p-10">
        <h1>Author: {{ authors[0].author.name }}</h1>
        <p>Bio: {{ authors[0].author.bio }}</p>
        <h3>
          Here are a list of authors that have been written by{{
            authors[0].author.name
          }}.
        </h3>
      </div>
      <div
        class="
          grid
          xl:grid-cols-4
          lg:grid-cols-3
          md:grid-cols-2
          sm:grid-cols-1
          gap-10
          p-10
          bg-gray-200
          h-full
        "
      >
        <div v-for="author in authors" :key="author.slug">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: author.slug } }">
            <h3 class="p-5">{{ author.title }}</h3>
            <img :src="author.img" width="250px" :alt="author.alt" />
            <div>
              <p>{{ author.description }}</p>
              <p>{{ formatDate(author.updatedAt) }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      authors: "author/authors",
    }),
  },
  mounted() {
    console.log(this.authors);
  },
  async asyncData({ $content, store, params }) {
    store.dispatch("author/getAuthor", params.author);
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>
