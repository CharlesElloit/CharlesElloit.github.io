import * as actionTypes from "../actionTypes";
import axios from "axios";

const fetchWorkspacesStart = () => ({
  type: actionTypes.FETCH_WORKSPACES_START,
});

/**
@params {Array} data - Workspaces data  
*/
const fetchWorkspacesSuccess = (workspaces) => ({
  type: actionTypes.FETCH_WORKSPACES_SUCCESS,
  workspaces,
});

/**
@params {Object} error - error object during the creation of the 
workspace.  
*/
const fetchWorkspacesFail = error => ({
  type: actionTypes.FETCH_WORKSPACES_FAIL,
  error: error
});

/**
@returns {Array} data - Workspaces Data to create the workspace.  
*/
export const fetchWorkspaces = () => async (dispatch) => {
  dispatch(fetchWorkspacesStart());
  try {
    const response = await axios.get("https://dailytasks-api.herokuapp.com/workspaces");
    dispatch(fetchWorkspacesSuccess(response.data.results));
  } catch (error) {
    dispatch(fetchWorkspacesFail(error.message));
  }
}