import { combineReducers } from "redux";
import authReducer from "./authReducer";
import workspaceReducer from "./workspaceReducer";

const rootReducer = combineReducers({
  workspaces: workspaceReducer,
  auth: authReducer,
});

export default rootReducer;
