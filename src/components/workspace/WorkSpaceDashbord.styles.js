import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  addIconButton: {
    color: "#fff",
    fontSize: theme.spacing(4.5)
  },
  container: {
    paddingTop: theme.spacing(4 * 3),
  },
  title: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: 700,
  },
  titleContainer: {
    color: "#fff",
    display: "flex",
    flexDirection: "row",
    marginTop: theme.spacing(2),
    justifyContent: "space-between",
  },
  workspace_header: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  // workspace styles
  workspace_container: {
    paddingTop: theme.spacing(1),
    marginTop: theme.spacing(1),
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
  },
  skeleton_card: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

export default useStyles;