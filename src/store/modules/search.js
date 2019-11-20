import search from "../../api/search";
import { SEARCH } from "../mutation-types";

const state = {
  search_phrase: {
    type: "prime",
    sort: "relativity",
    from: 0,
    size: 600,
    query: [
      { attr: "_basic", query: "", logic: "" },
      { attr: "patentType", query: "", logic: "" },
      { attr: "inventors.name.raw", query: "", logic: "" },
      { attr: "assignees.name.raw", query: "", logic: "" },
      { attr: "classification.uspc.raw", query: "", logic: "" },
      { attr: "country", query: "", logic: "or" },
      { attr: "applicationDate.iso", query: "", logic: "" },
      { attr: "title", query: "", logic: "or" },
      { attr: "abstract.plain", query: "", logic: "or" }
    ]
  },
  basic: "",
  patent_search_phrase: {
    type: "prime",
    sort: "relativity",
    from: 0,
    size: 600,
    query: [
      { attr: "_basic", query: "", logic: "" },
      { attr: "patentType", query: "", logic: "" },
      { attr: "inventors.name.raw", query: "", logic: "" },
      { attr: "assignees.name.raw", query: "", logic: "" },
      { attr: "classification.uspc.raw", query: "", logic: "" },
      { attr: "country", query: "", logic: "or" },
      { attr: "applicationDate.iso", query: "", logic: "" },
      { attr: "title", query: "", logic: "precise" },
      { attr: "abstract.plain", query: "", logic: "or" }
    ]
  },
  paper_search_phrase: {
    type: "prime",
    sort: "relativity",
    from: 0,
    size: 600,
    query: [
      { attr: "_basic", query: "", logic: "" },
      { attr: "title", query: "", logic: "" },
      { attr: "abstract", query: "", logic: "" },
      { attr: "authors.name", query: "", logic: "" },
      { attr: "year", query: "", logic: "" }
    ]
  },
  fund_search_phrase: {
    type: "prime",
    sort: "relativity",
    from: 0,
    size: 600,
    query: [
      { attr: "_basic", query: "", logic: "" },
      { attr: "rootTag.Award.AwardTitle", query: "", logic: "" },
      { attr: "rootTag.Award.AbstractNarration", query: "", logic: "" },
      { attr: "rootTag.Award.Investigator", query: "", logic: "" },
      { attr: "rootTag.Award.Institution", query: "", logic: "" },
      { attr: "rootTag.Award.AwardEffectiveDate", query: "", logic: "" }
    ]
  },
  person_search_phrase: {
    type: "prime",
    sort: "relativity",
    from: 0,
    size: 600,
    query: [
      { attr: "_basic", query: "", logic: "" },
      { attr: "fullName", query: "", logic: "" }
    ]
  },
  assignee_search_phrase: {
    type: "prime",
    sort: "relativity",
    from: 0,
    size: 600,
    query: [
      { attr: "_basic", query: "", logic: "" },
      { attr: "fullName", query: "", logic: "" }
    ]
  },
  search_result: {
    data: {}
  },
  isSearching: false
};

const getters = {};

const actions = {
  getSearch({ commit }, pageType) {
    console.log(state.search_phrase);
    search.getSearchResult(
      res => {
        commit(SEARCH.GET_SEARCH_RESULT, res);
      },
      pageType,
      state.search_phrase
    );
  },
  initSearch({ commit }, { pageType, searchphrase }) {
    console.log(searchphrase);
    search.getSearchResult(
      res => {
        commit(SEARCH.GET_SEARCH_RESULT, res);
      },
      pageType,
      searchphrase
    );
  }
};

const mutations = {
  [SEARCH.GET_SEARCH_RESULT](state, res) {
    state.search_result = res;
  },
  setSearching(state) {
    state.isSearching = !state.isSearching;
  },
  initQuery(state, pageType) {
    if (pageType === "assignee") {
      state.search_phrase = JSON.parse(
        JSON.stringify(state.assignee_search_phrase)
      );
    } else if (pageType === "person") {
      state.search_phrase = JSON.parse(
        JSON.stringify(state.person_search_phrase)
      );
    } else if (pageType === "paper") {
      state.search_phrase = JSON.parse(
        JSON.stringify(state.paper_search_phrase)
      );
    } else if (pageType === "fund") {
      state.search_phrase = JSON.parse(
        JSON.stringify(state.fund_search_phrase)
      );
    } else if (pageType === "patent") {
      state.search_phrase = JSON.parse(
        JSON.stringify(state.patent_search_phrase)
      );
    } else {
      state.search_phrase = null;
    }
  },
  setQuery(state, { id, val }) {
    console.log(id);
    console.log(val);
    if (id === 0) {
      state.search_phrase.query[id].query = state.basic + val;
    } else {
      state.search_phrase.query[id].query = val;
    }
    state.search_phrase.query[id].query = val;
    console.log(state.search_phrase);
  },
  setBasic(state, val) {
    state.basic = val;
  },
  setLogic(state, { id, val }) {
    state.search_phrase.query[id].logic = val;
  },
  setAttr(state, { id, val }) {
    state.search_phrase.query[id].attr = val;
  },
  setSort(state, sort) {
    state.search_phrase.sort = sort;
  },
  setRange(state, { from, size }) {
    state.search_phrase.from = from;
    state.search_phrase.size = size;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
