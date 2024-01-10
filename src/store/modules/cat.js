import axios from "axios";
import { catTags } from "./constants";

const state = {
    catImage: {
        url: null,
        isNotFound: false,
        id: null,
    },
    storyCat: JSON.parse(localStorage?.storyCat || '[]'),
    savedCat: JSON.parse(localStorage?.savedCat || '[]'),
    catFilter: {
        tag: null,
    },
    catTags: {
        tags: catTags,
        isError: false,
    }
};

const getters = {
    getCatImage: state => state.catImage,
    getSavedCat: state => state.savedCat,
    getStoryCat: state => state.storyCat,
    getIsSavedCat: state => Boolean(state.savedCat.find(item => item.url === state.catImage.url)),
    getCatFilter: state => state.catFilter,
    getCatTags: state => state.catTags,
};

const actions = {
    fetchCatImage({ commit }, params = {}) {
        const { tag } = params;


        const url = tag
            ? `https://cataas.com/cat/${tag}?json=true`
            : `https://cataas.com/cat?json=true`;

        axios.get(url)
            .then(response => {
                const { _id: id, tags } = response.data;

                const fullUrl = `https://cataas.com/cat/${id}`;

                commit('setCatImage', {
                    url: fullUrl,
                    isNotFound: false,
                    id,
                });

                tags.length && commit('setFilterTags', tags[0]);
                const historyItem = {
                    url: fullUrl,
                    id,
                };

                //save history
                const story = JSON.parse(localStorage?.storyCat || '[]');
                story.unshift(historyItem);

                if (story.length > 20) {
                    story.length = 20;
                }

                localStorage.storyCat = JSON.stringify(story);
                commit('setStoryCat', story);
                // commit('saveWaifuFilter', { type, category });
            })
            .catch((error) => {
                commit('setCatImage', {
                    url: null,
                    isNotFound: true,
                });
            });
    },
    fetchEditing({ commit, state }, params = {}) {
        const { type, filter, text } = params;
        const textParams = text?.sentence
            ? `/says/${text?.sentence}${text?.color ? `?fontColor=${text.color}` : '?'}${text?.size ? `&fontSize=${text.size}` : ''}`
            : '';

        let filterParams = filter
            ? 'filter=' + filter.type
            : '';
        if (filter.type === 'custom') {
            filterParams += `&r=${filter.r}&g=${filter.g}&b=${filter.b}`
        }

        const url = `https://cataas.com/cat/${state.catImage.id}${textParams ? `${textParams}` : '?'}${filterParams}${type ? `type=${type}` : ''}`;
        commit('updateCatImage', url);
        commit('setFilterEditing', params);
    },
    fetchTags({ commit }) {
        axios.get(`https://cataas.com/api/tags`)
            .then(response => {
                const isError = false;
                const tags = response.data;
                const filteredTags = tags.filter(item => !item.includes('russi') && item);
                commit('setCatTags', {
                    tags: filteredTags,
                    isError,
                });
            }).catch(() => {
                const isError = true;
                const tags = [];
                commit('setCatTags', { tags, isError })
            });
    },
    openStoryItem({ commit }, id) {
        const url = `https://cataas.com/cat/${id}`;
        commit('setCatImage', {
            isNotFound: false,
            url, id,
        });
    },
    saveCatImage({ state, commit }) {
        const jsonList = localStorage.getItem('savedCat');
        let list = jsonList ? JSON.parse(jsonList) : [];
        if (list.find(item => item.url === state.catImage.url)) {
            list = list.filter(item => item.url !== state.catImage.url);
            localStorage.savedCat = JSON.stringify(list);
        } else {
            list.push({
                ...state.catFilter,
                id: state.catImage.id,
                url: state.catImage.url,
            });
            localStorage.savedCat = JSON.stringify(list);
        }
        commit('setCatSaved', list);
    },
    onOpenFavourite({ commit }, story) {
        commit('setCatImage', {
            id: story.id,
            url: story.url,
        });
        commit('setFilterTags', story.tag);
        commit('setFilterEditing', {
            text: story.text,
            filter: story.filter,
            type: story.type,
        });
    },
};

const mutations = {
    setCatImage(state, payload) {
        state.catImage = payload;
    },
    setFilterTags(state, tag) {
        state.catFilter.tag = tag;
    },
    setFilterEditing(state, payload) {
        state.catFilter = {
            ...state.catFilter,
            ...payload,
        };
    },
    setCatTags(state, payload) {
        state.catTag = payload;
    },
    updateCatImage(state, src) {
        state.catImage.url = src;
    },
    setCatSaved(state, list) {
        state.savedCat = list;
    },
    setStoryCat(state, story) {
        state.storyCat = story;
    },
};

export default {
    state, getters, actions, mutations
};