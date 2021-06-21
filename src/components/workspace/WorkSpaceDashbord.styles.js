import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  addIconButton: {
    color: "#6E7681",
    marginTop: theme.spacing(-1),
    fontSize: theme.spacing(4.5)
  },
  container: {
    paddingTop: theme.spacing(4 * 3),
  },
  title: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: 700,
  },
  titleContainer: {
    color: "#fff",
    display: "flex",
    flexDirection: "row",
    marginTop: theme.spacing(4),
    justifyContent: "space-between",
  },
  workspace_header: {
    display: "flex",
    position: "fixed",
    marginBottom: 10,
  },
  // workspace styles
  workspace_container: {
    paddingTop: theme.spacing(1),
    marginTop: theme.spacing(4)
  },
  workspace_title: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: 600,
    textDecoration: "none",
    textTransform: "capitalize",
  },
  projectCard_container: {
    color: "#ffffff",
    display: "flex",
    paddingTop: theme.spacing(2),
  }
}));

export default useStyles;