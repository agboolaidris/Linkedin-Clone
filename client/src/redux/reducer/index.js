import { combineReducers } from "redux";
import Auth from "./auth";
import Profile from "./profile";
const root = combineReducers({
  Auth,
  Profile,
});
export default root;
