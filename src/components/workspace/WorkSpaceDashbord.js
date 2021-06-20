import React from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/AddCircleOutline";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from '@material-ui/core/Zoom';
import Workspace from "./Workspace";
import CreateWorkspaceModal from "components/modals/CreateWorkspaceModal"
import useStyles from "./WorkSpaceDashbord.styles";
import NoWorkspace from "./No-workspace";

import axios from "axios";

export default function WorkSpaceDashbord() {
  const [state, setState] = React.useState({
    open: false,
    workspaces: []
  });

  const handleClickOpen = () => {
    setState({ ...state, open: true });
  };
  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const fetchWorkspaces = React.useRef(() => {});

  fetchWorkspaces.current = async () => {
    const workspace = await axios.get("https://dailytasks-api.herokuapp.com/workspaces");
    if(workspace) {
      setState({ ...state, workspaces: workspace.data.results })
    }
  }
  
  React.useEffect(() => {
    fetchWorkspaces.current();
  }, [])

  const classes = useStyles();

  return(
    <div className={classes.container}>
      <div className={classes.workspace_header}>
        <Typography className={classes.title} variant="body1">
          Workspace
        </Typography>
        <Tooltip TransitionComponent={Zoom} title="Create New Workspace">
          <IconButton onClick={handleClickOpen}>
            <AddIcon className={classes.addIconButton} />
          </IconButton>
        </Tooltip>
        <CreateWorkspaceModal handleClose={handleClose} open={state.open} />
      </div>
      <div className={classes.workspace_container}>
        { !state.workspaces ? <NoWorkspace handleClickOpen={handleClickOpen} /> :
          state.workspaces.map(({ title, _id }) => (
            <Workspace key={_id} title={title} />
          ))}
      </div>
    </div>
  );
};