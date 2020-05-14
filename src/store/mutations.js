export const updateEventTable = (state, payload) => {

  if(payload.create){
    state.create = payload.create;
    state.score = payload.score;
  } else {
    state.create = state.create + 1;
    state.score = state.create * 2 ;
  }

}
