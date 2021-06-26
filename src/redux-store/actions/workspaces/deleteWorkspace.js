import * as actionTypes from "../actionTypes";
import axios from "axios";

/**
@params {String} newTitle - New Title of the workspace to delete.  
*/
const deleteWorkspaceSuccess = (data) => ({
  type: actionTypes.DELETE_WORKSPACE_SUCCESS,
  data,
});

/**
@params {Object} error - error object during the creation of the 
workspace.  
*/
const deleteWorkspaceFail = error => ({
  type: actionTypes.DELETE_WORKSPACE_FAIL,
  error: error
});

/**
@params {Object} data - Data to delete the workspace.  
*/
export const deleteWorkspace = (id, history) => async (dispatch) => {
  dispatch({ type: actionTypes.DELETE_WORKSPACE_START });
  try {
    const response = await axios.delete(`https://dailytasks-api.herokuapp.com/workspace/${id}`);
    dispatch(deleteWorkspaceSuccess(response.data));
    history.push("/");
  } catch (error) {
    dispatch(deleteWorkspaceFail(error.message));
  }
}