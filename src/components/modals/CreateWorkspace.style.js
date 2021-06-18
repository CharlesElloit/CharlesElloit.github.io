import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  actions: {
    marginTop: theme.spacing(5),
    borderTop: "1px solid #6e7681",
    padding: theme.spacing(2),
  },
  createButton: {
    color: "#ffffff",
    background: "#328637",
    textTransform: "capitalize",
    marginRight: theme.spacing(2),
    "&:hover": {
      background: "#328637",
    }
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
    }
  },
  body: {
    width: 400,
    backgroundColor: "#161b22",
    padding: theme.spacing(2)
  },
  description: {
    color: "#6E7681",
    lineHeight: 1.5,
    fontSize: theme.spacing(1.5),
  },
  header: {
    borderTopRightRadius: 5,
    background: "#161B22",
    padding: theme.spacing(2),
    borderBottom: "1px solid #6E7681",
  },
  label: {
    fontSize: 13,
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
    fontWeight: 600,
    marginTop: theme.spacing(2)
  },
})) 

export default useStyles;
