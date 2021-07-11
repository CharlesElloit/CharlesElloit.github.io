import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./Loading.styles.js";

const Loading = ({ classes, progress }) => {
  return (
    <div className={classes.container}>
      <div className={classes.loadingContainer}>
        <LinearProgress variant="determinate" value={progress} classes={{
          root: classes.root,
          colorPrimary: classes.colorPrimary, 
          barColorPrimary: classes.barColorPrimary
        }} />
        <Typography className={classes.loadingText} variant="body2">
          Loading...
        </Typography>
      </div>
      <Typography className={classes.desc} variant="body2">
        Wait for a caple of seconds max 4, if it takes more please report here. 
        <a className={classes.link} href="https://github.com/Eklow-softwares/dailytask/issues">Github</a>
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Loading);
