import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";

const rootReducer = combineReducers({
  cities: cityReducer,
  activities: itineraryReducer,
});
export default rootReducer;
