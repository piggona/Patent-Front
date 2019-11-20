import patent from "../../api/patent";
import { PATENT } from "../mutation-types";

const state = {
  titleData: {},
  chart: {}
};

const getters = {};

const actions = {
  getTitle({ commit }, patent_uuid) {
    patent.getTitle(res => {
      commit(PATENT.GET_TITLE, res);
    }, patent_uuid);
  },
  getChart({ commit }, patent_uuid) {
    patent.getChart(res => {
      commit(PATENT.GET_CHART, res);
    }, patent_uuid);
  }
};

const mutations = {
  [PATENT.GET_TITLE](state, res) {
    state.titleData = res;
  },
  [PATENT.GET_CITED](state, res) {
    state.cited = res;
  },
  [PATENT.GET_OPTION](state, res) {
    state.chartOption = res;
  },
  [PATENT.GET_CHART](state, res) {
    state.chart = res;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
