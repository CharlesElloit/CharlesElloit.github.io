import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Typography from "@material-ui/core/Typography";
import Input from "components/common/Input";
import useStyles from "./CreateWorkspace.style";
import axios from "axios";

export default function CreateWorkspaceModal({ handleClose, open }) {
  const [state, setState] = React.useState({
    workspaceTitle: ""
  });

  const classes = useStyles();

  const handleChange = (_event) => {
    setState({ ...state, [_event.target.name]: _event.target.value })
  };
 
  const createWorkspace = async () => {
    const data = {
      title: state.workspaceTitle,
    };

    try {
      const workspace = await axios.post("http://localhost:4000/workspace/add", data);
      if(workspace) {
        console.log(workspace);
        handleClose();
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <div className={classes.header}>
          <Typography className={classes.title} variant="body1">Workspace</Typography>
        </div>
        <div className={classes.body}>
          <Typography className={classes.title} variant="body1">Create a new Workspace</Typography>
          <Typography className={classes.description} variant="caption">
            A workspace contains all the project related to a specific catgory
            Eg: Work, or personal projects.
          </Typography>
          <Input
            required
            name="workspaceTitle"
            onChange={(_event) => handleChange(_event)}
            inputType="text"
            classes={classes}
            labelName="Workspace Title"
            helperText="Type your full names for confirmation inorder to completed the account deletation"
          />
        <div className={classes.actions}>
          <Button 
            disableRipple
            className={state.workspaceTitle.length < 3 ? classes.disabled : classes.createButton} 
            onClick={state.workspaceTitle.length < 3 ? null : createWorkspace} 
            variant="contained"
          >
            Create
          </Button>
          <Button onClick={handleClose} className={classes.cancelButton} variant="contained">
            Cancel
          </Button>
        </div>
        </div>
      </Dialog>
    </div>
  );
}