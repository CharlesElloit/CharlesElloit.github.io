import Grid from "@material-ui/core/Grid";
import WorkSpace from "components/workspace/WorkSpaceDashbord";
import useStyles from "./Home.styles";

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <WorkSpace />
        </Grid>
        <Grid item xs={3} />
      </Grid>
    </div>
  )
};