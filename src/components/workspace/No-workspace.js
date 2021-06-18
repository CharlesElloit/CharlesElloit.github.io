import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import useStyles from "./No-workspace.styles";

export default function NoWorkspace({ handleClickOpen }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="body1" className={classes.title}>Dailytask</Typography>
      <Typography variant="body1" className={classes.subtitle}>
        Getting started
      </Typography>
      <Typography variant="caption" className={classes.description}>
        Your current don’t have any workspace. here are some<br />
        step to get you started.
      </Typography>
      <div className={classes.steps_container}>
        <div className={classes.arrow_container}>
          <div className={classes.arrow}></div>
          <Typography variant="caption" className={classes.lint}>
            <Link onClick={handleClickOpen} className={classes.link} to="#">Create a new Workspace.</Link>
          </Typography>
          <div className={classes.arrow}>
          </div>
          <Typography variant="caption" className={classes.lint}>
            Named your workspace.
          </Typography>
          <div className={classes.arrow}>
          </div>
          <Typography variant="caption" className={classes.lint}>
            Create project within your workspace.
          </Typography>
        </div>
      </div>
    </div>
  )
};