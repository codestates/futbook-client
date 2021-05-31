import { SIGN_IN, SIGN_OUT } from "../actions";
import { initialState } from "./initialState";

const signReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return Object.assign({}, state, { sign: action.payload });

    case SIGN_OUT:
      return Object.assign({}, state, { sign: action.payload });

    default:
      return state;
  }
};

export default signReducer;
