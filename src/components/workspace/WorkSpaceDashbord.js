import React from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/AddCircleOutline";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from '@material-ui/core/Zoom';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchWorkspaces } from "redux-store/actions/workspaces/getAllWorkspaces";
import Workspace from "./Workspace";
import useStyles from "./WorkSpaceDashbord.styles";
import NoWorkspace from "./No-workspace";
import WorkspaceSkeleton from "components/skeletons/Workspace.skeleton";

function WorkSpaceDashbord({ fetchWorkspaces, workspaces, loading }) {
  const handlefetchWorkspaces = React.useRef(() => {});

  handlefetchWorkspaces.current = () => {
    fetchWorkspaces();
  }

  React.useEffect(() => {
    handlefetchWorkspaces.current();
  }, [])

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.workspace_header}>
        <Typography className={classes.title} variant="body1">
          Workspace
        </Typography>
        <Tooltip TransitionComponent={Zoom} title="Create New Workspace">
          <IconButton component={Link} to="/workspaces/add">
            <AddIcon className={classes.addIconButton} />
          </IconButton>
        </Tooltip>
      </div>
      <div className={classes.workspace_container}>
        {!loading ? !workspaces ? <NoWorkspace /> :
          workspaces.map(({ title, _id }) => (
            <Workspace key={_id} id={_id} title={title} />
          )) : <WorkspaceSkeleton /> }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.workspaces.loading,
  workspaces: state.workspaces.workspaces,
});

const mapDispatchToProps = {
  fetchWorkspaces,
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkSpaceDashbord)