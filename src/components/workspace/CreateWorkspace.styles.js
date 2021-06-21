import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  actions: {
    marginTop: theme.spacing(5),
  },
  createButton: {
    color: "#ffffff",
    background: "#328637",
    textTransform: "capitalize",
    marginRight: theme.spacing(2),
    "&:hover": {
      background: "#39B540",
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
    background: "#063c08",
    opacity: 0.65,
    textTransform: "capitalize",
    cursor: "not-allowed",
    marginRight: theme.spacing(2),
    "&:hover": {
      background: "#063c08",
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
  body: {
    width: "85%",
    maxWidth: 400,
    marginTop: theme.spacing(4),
  },
  description: {
    color: "#6E7681",
    lineHeight: 1.5,
    fontSize: theme.spacing(1.5),
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
    color: "#fff",
    fontSize: 23,
    fontWeight: 600,
    marginTop: theme.spacing(2)
  },
  subTitle: {
    color: "#fff",
    fontSize: 17,
    fontWeight: 600,
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(0.7)
  },
  root: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#0D1117"
  }
})) 

export default useStyles;
