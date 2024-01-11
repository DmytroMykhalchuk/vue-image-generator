const state = {
    isConfirmedRights: Boolean(parseInt(localStorage.getItem('isConfimedRights') || 0)),
};

const getters = {
    getIsConfirmedRights: state => state.isConfirmedRights,
};

const actions = {
    onChangeCinfirmation({ commit }, isConfirmed) {
        localStorage.setItem('isConfimedRights', (+isConfirmed).toString());
        commit('setIsConfirmed', isConfirmed);
    },

};

const mutations = {
    setIsConfirmed(state, isConfirmed) {
        state.isConfirmedRights = isConfirmed;
    },
};

export default {
    state, getters, actions, mutations
};