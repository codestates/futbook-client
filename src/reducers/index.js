import { combineReducers } from "redux";
import signReducer from "./signReducer";
import userReducer from "./userReducer";
import bookingReducer from "./bookingReducer";
import futsalReducer from "./futsalReducer";

const rootReducer = combineReducers({
  signReducer,
  userReducer,
  bookingReducer,
  futsalReducer,
});

export default rootReducer;
