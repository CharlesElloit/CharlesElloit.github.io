import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Input from "components/common/Input";
import Content from "components/common/createUpdateWorkspaceFormTop";
import { connect } from "react-redux";
import { updateWorkspace } from "redux-store/actions/workspaces/updateWorkspace"
import useStyles from "./CreateWorkspace.styles";
import { useHistory } from "react-router-dom"

function UpdateWorkspace({match, updateWorkspace, loading}) {
  const [state, setState] = React.useState({
    workspaceTitle: ""
  });
 
  const classes = useStyles();
  const history = useHistory();

  const handleChange = (_event) => {
    setState({ ...state, [_event.target.name]: _event.target.value })
  };

  const handleUpdateWorkspace = async () => {
    updateWorkspace(match.params.id, { title: state.workspaceTitle }, history)
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={4} />
        <Grid item xs={4} className={classes.container} >
          <div className={classes.body}>
            <Content classes={classes} title="Update Workspace" />
            <Input
              required
              name="workspaceTitle"
              onChange={(_event) => handleChange(_event)}
              inputType="text"
              inputClassName={classes.input}
              labeClassName={classes.label}
              labelName="New workspace name"
              helperText="Give your workspace a descriptive name."
            />
          <div className={classes.actions}>
            <Button 
              disableRipple
              className={state.workspaceTitle.length < 3 ? classes.disabled : classes.createButton} 
              onClick={state.workspaceTitle.length < 3 ? null : handleUpdateWorkspace} 
              variant="contained"
            >
              { !loading ? "Update workspace" : "Updating..." }
            </Button>
            <Button onClick={() => history.goBack()} className={classes.cancelButton}>Cancel</Button>
          </div>
          </div>
        </Grid>
        <Grid item xs={4} />
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.workspaces.loading,
});

const mapDispatchToProps = {
  updateWorkspace,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateWorkspace)