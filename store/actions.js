
const actions = {
    // function here
    async getArticle({commit}) {
        const articles = await this.$content('articles')
          .only(['title', 'description', 'img', 'slug', 'author'])
          .sortBy('createdAt', 'asc')
          .fetch()
          /* console.log(articles) */
        commit("SET_ARTICLES",articles)
        console.log(articles)
      },


};

export default actions;
