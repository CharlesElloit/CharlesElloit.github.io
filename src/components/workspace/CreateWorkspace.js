import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Input from "components/common/Input";
import Content from "components/common/createUpdateWorkspaceFormTop";
import { connect } from "react-redux";
import { createWorkspace } from "redux-store/actions/workspaces/createWorkspace"
import useStyles from "./CreateWorkspace.styles";
import { useHistory } from "react-router-dom";

function CreateWorkspace({ createWorkspace, loading }) {
  const [state, setState] = React.useState({
    inputError: false,
    workspaceTitle: ""
  });

  const classes = useStyles();
  const history = useHistory();

  const handleChange = (_event) => {
    setState({ ...state, [_event.target.name]: _event.target.value })
  };

  const handleCreateWorkspace = async () => {
    createWorkspace({ title: state.workspaceTitle }, history);
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={4} />
        <Grid item xs={4} className={classes.container} >
          <div className={classes.body}>
            <Content classes={classes} title="Create Workspace" />
            <Input
              required
              name="workspaceTitle"
              onChange={(_event) => handleChange(_event)}
              inputType="text"
              labeClassName={classes.label}
              inputClassName={classes.input}
              labelName="Workspace name"
              helperText="Give your workspace a descriptive name."
            />
          <div className={classes.actions}>
            <Button 
              disableRipple
              className={state.workspaceTitle.length < 3 ? classes.disabled : classes.createButton} 
              onClick={state.workspaceTitle.length < 3 ? null : handleCreateWorkspace} 
              variant="contained"
            >
              { !loading ? "Create workspace" : "Creating workspace" }
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
  createWorkspace,
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateWorkspace);
