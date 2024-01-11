import axios from "axios";

const state = {
    waifuImage: null,
    storyWaifu: JSON.parse(localStorage?.storyWaifu || '[]'),
    savedWaifu: JSON.parse(localStorage?.savedWaifu || '[]'),
    waifuFilter: {
        type: null,
        category: null,
    },
    openedWaifuStory: null,
};

const getters = {
    getWaifuImage: state => state.waifuImage,
    getSavedWaifu: state => state.savedWaifu,
    getStoryWaifu: state => state.storyWaifu,
    getIsSavedWaifu: state => Boolean(state.savedWaifu.find(item => item.url === state.waifuImage)),
    getWaifuStory: state => state.openedWaifuStory,
};

const actions = {
    async fetchWaifuImages({ commit }, params) {
        const { type, category } = params;
        await axios.get(`https://api.waifu.pics/${type}/${category}`)
            .then(response => {
                const url = response.data.url;
                commit('setWaifuImages', url);
                const historyItem = {
                    category, type, url,
                };

                //save history
                const story = JSON.parse(localStorage?.storyWaifu || '[]');
                story.unshift(historyItem);

                if (story.length > 20) {
                    story.length = 20;
                }

                localStorage.storyWaifu = JSON.stringify(story);
                commit('setStoryWaifu', story);
                commit('saveWaifuFilter', { type, category });
            });
    },
    saveImage({ state, commit }) {
        const jsonList = localStorage.getItem('savedWaifu');
        let list = jsonList ? JSON.parse(jsonList) : [];
        if (list.find(item => item.url === state.waifuImage)) {
            list = list.filter(item => item.url !== state.waifuImage);
            localStorage.savedWaifu = JSON.stringify(list);
        } else {
            list.push({
                type: state.waifuFilter.type,
                category: state.waifuFilter.category,
                url: state.waifuImage
            });
            localStorage.savedWaifu = JSON.stringify(list);
        }
        commit('setSaved', list);
    },
    onStoryOpen({ commit }, story) {
        commit('setWaifuStory', story);
        commit('setWaifuImages', story.url);
    },
};

const mutations = {
    setWaifuImages(state, url) {
        state.waifuImage = url;
    },
    setSaved(state, list) {
        state.savedWaifu = list;
    },
    setStoryWaifu(state, story) {
        state.storyWaifu = story;
    },
    saveWaifuFilter(state, filter) {
        state.waifuFilter = filter;
    },
    setWaifuStory(state, story) {
        state.openedWaifuStory = story;
    }
};

export default {
    state, getters, actions, mutations
};