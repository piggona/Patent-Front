import assigneeApi from "../../api/assignee";
import { ASSIGNEE } from "../mutation-types";

const state = {
  res: {},
  resPie: {},
  resBar: {},
  resRelation: {},
  resCloud: {}
};

const getters = {};

const actions = {
  getRes({ commit }, assignee) {
    assigneeApi.getRes(res => {
      commit(ASSIGNEE.GET_RES, res);
    }, assignee);
  },
  getResPie({ commit }, assignee) {
    assigneeApi.getResPie(res => {
      commit(ASSIGNEE.GET_RES_PIE, res);
    }, assignee);
  },
  getResBar({ commit }, assignee) {
    assigneeApi.getResBar(res => {
      commit(ASSIGNEE.GET_RES_BAR, res);
    }, assignee);
  },
  getResRelation({ commit }, assignee) {
    assigneeApi.getResRelation(res => {
      commit(ASSIGNEE.GET_RES_RELATION, res);
    }, assignee);
  },
  getResCloud({ commit }, assignee) {
    assigneeApi.getResCloud(res => {
      commit(ASSIGNEE.GET_RES_CLOUD, res);
    }, assignee);
  }
};

const mutations = {
  [ASSIGNEE.GET_RES](state, res) {
    state.res = res;
  },
  [ASSIGNEE.GET_RES_PIE](state, res) {
    state.resPie = res;
  },
  [ASSIGNEE.GET_RES_BAR](state, res) {
    state.resBar = res;
  },
  [ASSIGNEE.GET_RES_RELATION](state, res) {
    state.resRelation = res;
  },
  [ASSIGNEE.GET_RES_CLOUD](state, res) {
    state.resCloud = res;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
