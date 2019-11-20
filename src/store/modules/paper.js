import paper from "../../api/paper";
import { PAPER } from "../mutation-types";

const state = {
  titleData: {},
  chart: {}
};

const getters = {};

const actions = {
  getTitle({ commit }, paper_uuid) {
    paper.getTitle(res => {
      commit(PAPER.GET_TITLE, res);
    }, paper_uuid);
  }
};

const mutations = {
  [PAPER.GET_TITLE](state, res) {
    state.titleData = res;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
