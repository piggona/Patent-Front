import personApi from "../../api/person";
import { PERSON } from "../mutation-types";

const state = {
  res: {},
  resPie: {},
  resBar: {},
  resNet: {},
  resCo: {}
};

const getters = {};

const actions = {
  getRes({ commit }, inventor) {
    personApi.getRes(res => {
      commit(PERSON.GET_RES, res);
    }, inventor);
  },
  getResPie({ commit }, inventor) {
    personApi.getResPie(res => {
      commit(PERSON.GET_RES_PIE, res);
    }, inventor);
  },
  getResBar({ commit }, inventor) {
    personApi.getResBar(res => {
      commit(PERSON.GET_RES_BAR, res);
    }, inventor);
  },
  getResNet({ commit }, inventor) {
    personApi.getResNet(res => {
      commit(PERSON.GET_RES_NET, res);
    }, inventor);
  },
  getResCo({ commit }, inventor) {
    personApi.getResCo(res => {
      commit(PERSON.GET_RES_CO, res);
    }, inventor);
  }
};

const mutations = {
  [PERSON.GET_RES](state, res) {
    state.res = res;
  },
  [PERSON.GET_RES_BAR](state, res) {
    state.resBar = res;
  },
  [PERSON.GET_RES_PIE](state, res) {
    state.resPie = res;
  },
  [PERSON.GET_RES_NET](state, res) {
    state.resNet = res;
  },
  [PERSON.GET_RES_CO](state, res) {
    state.resCo = res;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
