import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// import withStyles from "@material-ui/core/styles/withStyles";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import useStyles from "../workspace/WorkSpaceDashbord.styles";

function SkeletonWorkspace() {
  const classes = useStyles();

  return (
    <SkeletonTheme color="#10141B" highlightColor="#12171F">
      <div className={classes.workspace}>
        <div className={classes.titleContainer}>
          <Typography className={classes.workspace_title} variant="body1">
            <Skeleton width={100} />
          </Typography>
        </div>
        <Grid container className={classes.projectCard_container}>
          <Grid className={classes.skeleton_card} item><Skeleton duration={2} delay={1} width={200} height={100} /></Grid>
          <Grid className={classes.skeleton_card} item><Skeleton height={100} width={200} /></Grid>
          <Grid className={classes.skeleton_card} item><Skeleton height={100} width={200} /></Grid>
          <Grid className={classes.skeleton_card} item><Skeleton height={100} width={200} /></Grid>
        </Grid>
      </div>
    </SkeletonTheme>
  )
};

const WorkspaceSkeleton = () => (
  <>
    <SkeletonWorkspace />
    <SkeletonWorkspace />
  </>
);

export default WorkspaceSkeleton;
