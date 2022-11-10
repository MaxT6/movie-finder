import { combineReducers } from "redux";
import * as types from "./action-types";

const intialFormState = {
  movieTitle: "",
};

function form (state=intialFormState, action) {
  switch(action.type) {
    case types.INPUT_CHANGE: {
      const { movieTitle, value } = action.payload
      return{...state, [movieTitle]:value }
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

export default combineReducers({ form })