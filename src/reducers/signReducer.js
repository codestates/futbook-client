import { SIGN_IN, SIGN_UP, SIGN_OUT } from "../actions";
import { initialState } from "./initialState";

const signReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return Object.assign.apply({}, state, {});

    case SIGN_UP:
      return Object.assign.apply({}, state, {});

    case SIGN_OUT:
      return Object.assign.apply({}, state, {});

    default:
      return state;
  }
};

export default signReducer;
