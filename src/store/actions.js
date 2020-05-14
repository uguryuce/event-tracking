import Vue from"vue";

export const setEventTable = ({state, commit}, eventTable) => {
  commit ("updateEventTable", eventTable);
  let resultData = {
    create : state.create,
    score : state.score
  }
  Vue.http.put("https://event-project-37700.firebaseio.com/event-table.json", resultData )
    .then (response => {
      console.log(response);
    })
}

export const getEventTable = ({commit}) => {

  Vue.http.get("https://event-project-37700.firebaseio.com/event-table.json")
    .then(response => {
      console.log(response);
      commit("updateEventTable", response.body);
    })

}
