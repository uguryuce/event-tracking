import Vue from "vue";
import { router } from "../../router";

const state = {

  events : []

};





const getters = {

  getEvents (state) {
    return state.events;
  },

  getEvent (state) {
    return key => state.events.filter(element => {
      return element.key === key;
    })
  }

};





const mutations = {

  updateEventList (state, event) {
    state.events.push(event);
  }

};





const actions = {

  initApp ({ commit }) {
    //Vue resource işlemleri
    Vue.http.get("https://event-project-37700.firebaseio.com/events.json")
      .then(response => {
        let data = response.body;
        for(let key in data){
          data[key].key = key;
          commit("updateEventList", data[key]);
        }
      })
  },

  createEvent ({ dispatch, commit, state }, event) {
    //Vue resource işlemleri
    Vue.http.post("https://event-project-37700.firebaseio.com/events.json", event)
      .then( (response) => {
        /* Event Listesinin Güncellenmesi */
        event.key = response.body.name;
        commit("updateEventList", event);

        /* Oluşturulan, katılınan ve puan bilgilerinin güncellenmesi */
        let eventTable = {
          create : event.length,
          score : event.length
        }

        dispatch("setEventTable", event)
        router.replace("/event-list")
      })
  },

  joinEvent ({commit}, payload) {
    //Vue resource işlemleri
  }

};





export default {

  state,
  getters,
  mutations,
  actions

}

