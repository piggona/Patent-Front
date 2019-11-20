import fund from "../../api/fund";
import { FUND } from "../mutation-types";

const state = {
  titleData: {}
};

const getters = {};

const actions = {
  getTitle({ commit }, fund_uuid) {
    fund.getTitle(res => {
      commit(FUND.GET_TITLE, res);
    }, fund_uuid);
  }
};

const mutations = {
  [FUND.GET_TITLE](state, res) {
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
