import { GET_USER_INFO } from "../actions";
import { initialState } from "./initialState";

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return Object.assign.apply({}, state, {});

    default:
      return state;
  }
};

export default userReducer;
