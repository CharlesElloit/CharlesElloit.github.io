import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: 700,
  },
  project_card: {
    display: "flex",
    width: theme.spacing(24),
    height: theme.spacing(13),
    border: "1px solid #494B4F",
    padding: theme.spacing(1),
    borderRadius: 5,
    justifyContent: "space-between",
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
    "&:hover": {
      boxShadow: "1px 2px 2px 1px #161b22",
    },
  },
  project_card_title: {
    color: "#ffffff",
    fontSize: theme.spacing(1.7),
    textDecoration: "none",
  },
  dragIcon: {
    fontSize: 20,
    cursor: "grab",
  },
  createProjectBtn: {
    display: "flex",
    borderRadius: 5,
    cursor: "pointer",
    textAlign: "center",
    justifyContent: "center",
    width: theme.spacing(24),
    height: theme.spacing(13),
    padding: theme.spacing(1),
    border: "1px dashed #494B4F",
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
    "&:hover": {
      backgroundColor: "#161b22",
    },
    "&:active": {
      backgroundColor: "#20262f",
    },
  },
  createProjectBtnIcon: {
    width: 100,
    height: 100,
  }
}));

export default useStyles;
