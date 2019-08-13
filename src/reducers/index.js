import { combineReducers } from "redux";
import counterwidget from "./counterwidget";
import dashboard from "./dashboard";
import homepage from "./homepage";

export default combineReducers({
  counterwidget,
  dashboard,
  homepage
});
