import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export var state = () => ({
    articles: [],
    
    
});

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
;