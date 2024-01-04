import axios from "axios";

const state = {
    waifuImage: null,
};

const getters = {
    getWaifuImage: state => state.waifuImage,
};

const actions = {
    async fetchWaifuImages({ commit }, params) {
        const { type, category } = params;
        await axios.get(`https://api.waifu.pics/${type}/${category}`)
            .then(response => {
                const url = response.data.url;
                commit('setWaifuImages', url);
            });
    },
};

const mutations = {
    setWaifuImages(state, url) {
        state.waifuImage = url;
    },
};

export default {
    state, getters, actions, mutations
};