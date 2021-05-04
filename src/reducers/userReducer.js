import { GET_USER_INFO } from "../actions";
import { initialState } from "./initialState";

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return Object.assign({}, state, { userInfo: action.payload });

    default:
      return state;
  }
};

export default userReducer;
