import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  showHeader: true
};

const mutations = {

  show(state) {
    state.showHeader = true;
  },
  hide(state) {
    state.showHeader = false;
  }

};

const actions = {
  show: ({commit}) => commit('show'),
  hide: ({commit}) => commit('hide')
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
