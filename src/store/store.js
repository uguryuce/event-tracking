import Vue from "vue";
import Vuex from "vuex";

import event from "./modules/event";

import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state : {
    join : 0,
    create : 0,
    score : 0
  },

  getters,
  mutations,
  actions,

  modules : {
    event
  }
});
