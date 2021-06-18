import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "components/projects/Card";
import useStyles from "./WorkSpaceDashbord.styles";

export default function Workspace({ title }) {
  const classes = useStyles();
  return (
    <div className={classes.workspace}>
      <Typography className={classes.workspace_title} variant="body1">
        {title}
      </Typography>
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