import Typography from "@material-ui/core/Typography";

const Content = ({ classes, title }) => (
  <>
    <div className={classes.header}>
      <Typography className={classes.title} variant="body1">
        {title}
      </Typography>
    </div>
    <Typography className={classes.subTitle} variant="body2">
      Workspace
    </Typography>
    <Typography className={classes.description} variant="caption">
      A workspace contains all the project related to a specific catgory
      Eg: Work, or personal projects.
    </Typography>
  </>
);

export default Content;