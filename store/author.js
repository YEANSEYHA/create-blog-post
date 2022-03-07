export const state = () =>({
    authors:[],
})

export const actions = {
    async getAuthor({commit}){
        const authors = await this.$content('articles')
        .only(['author', 'slug'])
        .without('body')
        .sortBy('createdAt', 'asc')
        .fetch()
        commit("GET_AUTHOR",authors)
      }
}

export const getters ={
    authors(state){
        return state.authors;
    }
}

export const mutations ={
    GET_AUTHOR(state, authors){
        state.authors = authors;
    }
}