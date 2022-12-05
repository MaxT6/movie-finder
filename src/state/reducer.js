import { combineReducers } from "redux";
import * as types from "./action-types";

const intialFormState = {
  movieTitle: "",
  year: "",
};

function form (state = intialFormState, action) {
  switch(action.type) {
    case types.INPUT_CHANGE: {
      const { movieTitle, value } = action.payload
      console.log("payload 2:", action.payload)
      console.log("HERE IN REDUCER:", "movie title:",movieTitle, "value:", value)
    console.log("state in reducer:", state)
      return {...state, [movieTitle]: value }
    }
    case types.RESET_FORM: {
      return {
        movieTitle: "",
      }
    }
    default:
      return state
  }
};


const initialCardState = "";
function card (state = initialCardState, action) {
  switch(action.type) {
    case types.SHOW_MOVIE:
      console.log("Movie Payload", action.payload);
      return (state = action.payload);

      default:
        return state;
  }
}

// function card ()

export default combineReducers({ 
  form, card 
})