import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  actions: {
    marginTop: theme.spacing(5),
  },
  deleteButton: {
    color: "#ffffff",
    background: "#C14040",
    textTransform: "capitalize",
    marginRight: theme.spacing(2),
    "&:hover": {
      background: "#EE4949",
      border: "none",
    }
  },
  container: {
    width: "100%",
    height: "80%",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    marginTop: theme.spacing(6)
  },
  disabled: {
    color: "#ffffff",
    background: "#EE4949",
    opacity: 0.65,
    textTransform: "capitalize",
    cursor: "not-allowed",
    marginRight: theme.spacing(2),
    "&:hover": {
      background: "#EE4949",
    }
  },
  cancelButton: {
    color: "#ffffff",
    background: "#4B4F4C",
    textTransform: "capitalize",
    "&:hover": {
      background: "#4B4F4C",
    },
  },
  checkboxContainer: {
    display: "flex",
    alignContent: "center",
    justifyContent: "flex-start",
    marginTop: theme.spacing(2),
  },
  checkbox: {
    color: "#fff",
    marginLeft: theme.spacing(-1),
  },
  checkBoxDesc: {
    color: "#969696",
    lineHeight: 1.5,
    marginTop: theme.spacing(1.5),
    fontSize: theme.spacing(1.6),
  },
  body: {
    width: "85%",
    maxWidth: 400,
    marginTop: theme.spacing(4),
  },
  deleteBoxWarning: {
    borderRadius: 5,
    padding: theme.spacing(1.5),
    marginTop: theme.spacing(5),
    border: "1px solid #28313E",
  },
  description: {
    color: "#969696",
    lineHeight: 1.5,
    fontSize: theme.spacing(1.6),
  },
  header: {
    borderTopRightRadius: 5,
    borderBottom: "1px solid #28313E",
  },
  label: {
    fontSize: 14,
    color: "#ffffff",
    fontWeight: 600,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
  input: {
    border: "none",
  },
  title: {
    color: "#EE4949",
    fontSize: 23,
    fontWeight: 600,
  },
  subTitle: {
    color: "#EE4949",
    fontSize: 16,
    fontWeight: 600,
    marginBottom: theme.spacing(0.7)
  },
  root: {
    width: "100%",
    height: "100vh",
  }
})) 

export default useStyles;
