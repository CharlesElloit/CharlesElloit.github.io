import * as actionTypes from "../actions/actionTypes";
import mergeObjects from "../utils/mergeObjects";

const initialState = {
  workspaces: [],
  loading: false
};

// Fetch all workspaces.
const fetchWorkspacesDataStart = (state, action) =>
  mergeObjects(state, { loading: true, workspaces: [] });

const fetchWorkspacesDataSuccess = (state, action) =>
  mergeObjects(state, {
    loading: false,
    workspaces: action.workspaces
  });

const fatchWorkspacesDataFail = (state, action) =>
  mergeObjects(state, { loading: true, error: action });

// Create workspace
const createWorkspaceStart = (state, action) =>
  mergeObjects(state, { loading: true, workspaces: [] });

const createWorkspaceSuccess = (state, action) =>
  mergeObjects(state, {
    loading: false,
    workspaces: action.workspaces
  });

const createWorkspaceFail = (state, action) =>
  mergeObjects(state, { loading: true, error: action });

// Udpate workspace
const updateWorkspacesDataStart = (state, action) =>
  mergeObjects(state, { loading: true, workspaces: [] });

const updateWorkspacesDataSuccess = (state, action) =>
  mergeObjects(state, {
    loading: false,
    workspaces: action.workspaces
  });

const updateWorkspacesDataFail = (state, action) =>
  mergeObjects(state, { loading: true, error: action });

//delete workspace
const deleteWorkspaceStart = (state, action) =>
  mergeObjects(state, { loading: true, workspaces: [] });

const deleteWorkspaceSuccess = (state, action) =>
  mergeObjects(state, {
    loading: false,
    workspaces: action.workspaces
  });

const deleteWorkspaceFail = (state, action) =>
  mergeObjects(state, { loading: true, error: action });

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // fetch workspaces
    case actionTypes.FETCH_WORKSPACES_START:
      return fetchWorkspacesDataStart(state, action);
    case actionTypes.FETCH_WORKSPACES_SUCCESS:
      return fetchWorkspacesDataSuccess(state, action);
    case actionTypes.FETCH_WORKSPACES_FAIL:
      return fatchWorkspacesDataFail(state, action);
    
    // create workspace
    case actionTypes.CREATE_WORKSPACE_START:
      return createWorkspaceStart(state, action);
    case actionTypes.CREATE_WORKSPACE_SUCCESS:
      return createWorkspaceSuccess(state, action);
    case actionTypes.CREATE_WORKSPACE_FAIL:
      return createWorkspaceFail(state, action);

    //Update workspace
    case actionTypes.UPDATE_WORKSPACE_START:
      return updateWorkspacesDataStart(state, action);
    case actionTypes.UPDATE_WORKSPACE_SUCCESS:
      return updateWorkspacesDataSuccess(state, action);
    case actionTypes.UPDATE_WORKSPACE_FAIL:
      return updateWorkspacesDataFail(state, action);

    //Delete workspace
    case actionTypes.DELETE_WORKSPACE_START:
      return deleteWorkspaceStart(state, action);
    case actionTypes.DELETE_WORKSPACE_SUCCESS:
      return deleteWorkspaceSuccess(state, action);
    case actionTypes.DELETE_WORKSPACE_FAIL:
      return deleteWorkspaceFail(state, action);
      
    default:
      return state;
  }
};

export default reducer;