import useStyles from "./workspace-tasks.styles";
import { Divider } from "@material-ui/core";

// import { AllInboxRounded } from "@material-ui/icons"

const WorkspaceTasks = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.ellipse}></div>
      <div className={classes.ellipse2}></div>
      <div className={classes.main_container}>
        <div className={classes.sideBar}>
          <div className={classes.header}>
            <div className={classes.avatar_container}>
              <div className={classes.avatar}>A</div>
              <h3>Alex Jordan</h3>
            </div>
            <div className={classes.menu}>
              <div className={classes.link}>
                <a className={classes.link_text} href="/inbox">
                  Inbox
                </a>
              </div>
              <div className={classes.link}>
                <a className={classes.link_text} href="/today">
                  Today
                </a>
              </div>
              <div className={classes.link}>
                <a className={classes.link_text} href="/upcoming">
                  Upcoming
                </a>
              </div>
              <div className={classes.link}>
                <a className={classes.link_text} href="/others">
                  Others
                </a>
              </div>
              <div style={{ marginBottom: 10 }} className={classes.link}>
                <a className={classes.link_text} href="/trash">
                  Trash
                </a>
              </div>
            </div>
            <Divider className={classes.divider} />
          </div>
        </div>
        <div className={classes.main}>page</div>
      </div>
    </div>
  );
};

export default WorkspaceTasks;
