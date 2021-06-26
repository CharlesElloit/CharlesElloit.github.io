import * as actionTypes from "../actionTypes";
import axios from "axios";

const createWorkspaceStart = () => ({
  type: actionTypes.CREATE_WORKSPACE_START,
});

/**
@params {String} title - Title of the workspace to create.  
*/
const createWorkspaceSuccess = (title) => ({
  type: actionTypes.CREATE_WORKSPACE_SUCCESS,
  title,
});

/**
@params {Object} error - error object during the creation of the 
workspace.  
*/
const createWorkspaceFail = error => ({
  type: actionTypes.CREATE_WORKSPACE_FAIL,
  error: error
});

/**
@params {Object} data - Data to create the workspace.  
*/
export const createWorkspace = (data, history) => async (dispatch) => {
  dispatch(createWorkspaceStart());
  try {
    const response = await axios.post("https://dailytasks-api.herokuapp.com/workspaces/add", data);
    dispatch(createWorkspaceSuccess(response.data));
    history.push("/")
  } catch (error) {
    dispatch(createWorkspaceFail(error.message));
  }
}