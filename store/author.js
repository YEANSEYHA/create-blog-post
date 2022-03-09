export const state = () => ({
    authors: [],
})
export const actions = {
    async getAuthor({ commit }, data) {
        const authors = await this.$content('articles')
            /* .only(['author', 'slug']) */
            .without('body')
            .sortBy('createdAt', 'asc')
            .fetch()
        // Filter
        const datas = authors.filter((content) => content.author.name.includes(data))
        commit("GET_AUTHOR", datas)
    },
}
export const getters = {
    authors(state) {
        return state.authors;
    }
}
export const mutations = {
    GET_AUTHOR(state, authors) {
        state.authors = authors;
    }
}