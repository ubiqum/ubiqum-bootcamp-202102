import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  cities: cityReducer,
  activities: itineraryReducer,
  users: userReducer,
  auth: authReducer,
  errors: errorReducer,
});
export default rootReducer;
