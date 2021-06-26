import { combineReducers } from "redux";
import workspaceReducer from "./workspaceReducer";

const rootReducer = combineReducers({
  workspaces: workspaceReducer,
});

export default rootReducer;
