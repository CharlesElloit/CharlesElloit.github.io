import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "components/projects/Card";
import WorkspacePopover from "components/modals/Popover";
import { Link } from "react-router-dom";
import useStyles from "./WorkSpaceDashbord.styles";

export default function Workspace({ title, id }) {
  const classes = useStyles();
  const joinedTitle = title.split(" ").join("-");

  return (
    <div className={classes.workspace}>
      <div className={classes.titleContainer}>
        <Typography
          component={Link}
          to={`/${joinedTitle}/update/${id}`}
          className={classes.workspace_title}
          variant="body1"
        >
          {title}
        </Typography>
        <WorkspacePopover _id={id} name={joinedTitle} />
      </div>
      <Grid container className={classes.projectCard_container}>
        <Grid item>
          <Card title="Dailytask" />
        </Grid>
        <Grid item>
          <Card title="Personal assistance" />
        </Grid>
        <Grid item>
          <Card title="Find Experts" />
        </Grid>
      </Grid>
    </div>
  )
};