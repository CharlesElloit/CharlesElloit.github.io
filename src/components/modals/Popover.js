import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  paper: {
  },
  linksContainer: {
    width: 150,
    backgroundColor: "#161b22",
    border: "1px solid #28313E",
    display: "flex",
    borderRadius: 5,
    flexDirection: "column",
    marginTop: theme.spacing(1)
  },
  link: {
    color: "#fff",
    width: "100%",
    display: "flex",
    alignItem: "center",
    textDecoration: "none",
    padding: theme.spacing(0.6),
    "&:hover": {
      backgroundColor: "#28313E"
    }
  },
  ul: {
    justifyContent: "center",
  },
  editIcon: {
    fontSize: theme.spacing(2.5),
    paddingRight: theme.spacing(0.6),
  },
  deleteIcon: {
    color: "red",
    fontSize: theme.spacing(2.5),
    paddingRight: theme.spacing(0.6),
  },
  settingsIcon: {
    fontSize: theme.spacing(2.5),
    paddingRight: theme.spacing(0.6),
  },
  moreVertIcon: {
    color: "#ffffff",
    cursor: "pointer",
    marginRight: theme.spacing(3),
  },
}));

export default function WorkspacePopover({ _id, name }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <MoreVertIcon onClick={handleClick} className={classes.moreVertIcon} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Paper className={classes.paper}>
          <div className={classes.linksContainer}>
            <div className={classes.ul}>
             {/* <Link className={classes.link} to={`/${name}/settings/${_id}`}>
                <SettingsIcon className={classes.settingsIcon} />
                <Typography variant="body2">Settings</Typography>
              </Link>  */}
            </div>
            <div className={classes.ul}>
              <Link className={classes.link} to={`/${name}/update/${_id}`}>
                <EditIcon className={classes.editIcon} />
                <Typography variant="body2">Edit</Typography>
              </Link>
            </div>
            <div className={classes.ul}>
            <Link className={classes.link} to={`/${name}/delete/${_id}`}>
              <DeleteIcon className={classes.deleteIcon} />
              <Typography variant="body2">Delete</Typography>
            </Link>
            </div>
          </div>
        </Paper>
      </Popover>
    </div>
  );
}