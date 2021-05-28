import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  cities: cityReducer,
  activities: itineraryReducer,
  users: userReducer,
});
export default rootReducer;
