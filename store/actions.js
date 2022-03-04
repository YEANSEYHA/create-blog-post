
const actions = {
    // function here
    async getArticle({ $content, params }) {
        const articles = await $content('articles')
          .only(['title', 'description', 'img', 'slug', 'author'])
          .sortBy('createdAt', 'asc')
          .fetch()
          /* console.log(articles) */
        commit("SET_ARTICLES",data)
        console.log(articles)
      }

};

export default actions;
