import * as actionTypes from "../actionTypes";
import axios from "axios";

const updateWorkspaceStart = () => ({
  type: actionTypes.UPDATE_WORKSPACE_START,
});

/**
@params {String} newTitle - New Title of the workspace to update.  
*/
const updateWorkspaceSuccess = (newTitle) => ({
  type: actionTypes.UPDATE_WORKSPACE_SUCCESS,
  newTitle,
});

/**
@params {Object} error - error object during the creation of the 
workspace.  
*/
const updateWorkspaceFail = error => ({
  type: actionTypes.UPDATE_WORKSPACE_FAIL,
  error: error
});

/**
@params {Object} data - Data to update the workspace.  
*/
export const updateWorkspace = (id, data, history) => async (dispatch) => {
  dispatch(updateWorkspaceStart());
  try {
    const response = await axios.put(`https://dailytasks-api.herokuapp.com/workspace/${id}`, data);
    dispatch(updateWorkspaceSuccess(response.data));
    history.push("/")
  } catch (error) {
    dispatch(updateWorkspaceFail(error.message));
  }
}