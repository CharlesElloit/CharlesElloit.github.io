import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Checkbox from '@material-ui/core/Checkbox';
import Input from "components/common/Input";
import useStyles from "./DeleteWorkspace.styles";
import axios from "axios";
import { useHistory } from "react-router-dom"

export default function DeleteWorkspace({match}) {
  const [state, setState] = React.useState({
    checked: false,
    workspaceTitle: ""
  });
 
  const { id, name } = match.params;
  const workspaceName = name.split("-").join(" ");

  const classes = useStyles();
  const history = useHistory();

  const handleChange = (_event) => {
    setState({ ...state, [_event.target.name]: _event.target.value })
  };

  const handleChecked = () => {
    setState({ ...state, checked: !state.checked });
  };

  const handleCancel = () => {
    history.goBack();
  };
 
  const deleteWorkspace = async () => {
    try {
      const workspace = await axios.delete(`http://localhost:4000/workspace/${id}`);
      if(workspace) {
        console.log(workspace);
        history.push("/")
      }
    } catch (error) {
      console.log(error)
    }
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
              name="workspaceTitle"
              onChange={(_event) => handleChange(_event)}
              inputType="text"
              classes={classes}
              labelName={`Re-type the name (${workspaceName}) to confirm`}
              helperText="Enter the name of the workspace you want to delete. to confirm"
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
              className={state.workspaceTitle.length < 3 || state.checked !== true ? classes.disabled : classes.deleteButton} 
              onClick={state.workspaceTitle.length < 3 ? null : deleteWorkspace} 
              variant="contained"
            >
              Delete workspace
            </Button>
            <Button onClick={handleCancel} className={classes.cancelButton}>Cancel</Button>
          </div>
          </div>
        </Grid>
        <Grid item xs={4} />
      </Grid>
    </div>
  );
}