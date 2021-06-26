import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Checkbox from '@material-ui/core/Checkbox';
import Input from "components/common/Input";
import { connect } from "react-redux";
import { deleteWorkspace } from "redux-store/actions/workspaces/deleteWorkspace"
import useStyles from "./DeleteWorkspace.styles";
import { useHistory } from "react-router-dom";

function DeleteWorkspace({match, deleteWorkspace, loading}) {
  const [state, setState] = React.useState({
    checked: false,
    inputError: false,
    workspaceTitle: "",
  });
 
  const { id, name } = match.params;
  const workspaceName = name.split("-").join(" ");

  const classes = useStyles();
  const history = useHistory();

  const handleChange = (_event) => {
    setState({ ...state, workspaceTitle: _event.target.value });
    if (state.workspaceTitle.length >= 3) {
      if (workspaceName !== _event.target.value) {
        setState({ ...state, inputError: true });
        return;
      }else{
        setState({ ...state, inputError: false });
      }
    }
  };

  const handleChecked = () => {
    setState({ ...state, checked: !state.checked });
  };
 
  const handleDeleteWorkspace = async () => {
    if(!state.checked || state.inputError || state.workspaceTitle.length > 3)
      return;
    deleteWorkspace(id, history);
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={4} />
        <Grid item xs={4} className={classes.container} >
          <div className={classes.body}>
            <div className={classes.header}>
              <Typography className={classes.title} variant="body1">
                Delete Workspace
              </Typography>
            </div>
            <div className={classes.deleteBoxWarning}>
              <Typography className={classes.subTitle} variant="body2">
                Deleting workspace
              </Typography>
              <Typography className={classes.description} variant="caption">
                Deleting workspace is one time operation and you will not be 
                able to recover what you deleted, Everything within and the 
                workspace will be wipe clean. Make sure your very sure about it.
              </Typography>
            </div>
            <Input
              required
              id="standard-error-helper-text"
              name="workspaceTitle"
              onChange={(_event) => handleChange(_event)}
              inputType="text"
              error={state.inputError}
              labeClassName={classes.label}
              inputClassName={classes.input}
              labelName={`Re-type the name (${workspaceName}) to confirm`}
              helperText={state.inputError ? "ERROR" : "Enter the name of the workspace you want to delete. to confirm"}
            />
            <div className={classes.checkboxContainer}>
              <Checkbox
                className={classes.checkbox}
                checked={state.checked}
                onChange={handleChecked}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
              <Typography className={classes.checkBoxDesc} variant="caption">
                Check the box in order to complete the deletation.
              </Typography>
            </div>
          <div className={classes.actions}>
            <Button 
              disableRipple
              className={state.workspaceTitle.length < 3 || state.inputError || !state.checked ? classes.disabled : classes.deleteButton} 
              onClick={state.workspaceTitle.length < 3 ? null : handleDeleteWorkspace} 
              variant="contained"
            >
             { !loading ? "Delete workspace" : "Deleting..."}
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
  deleteWorkspace,
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteWorkspace)