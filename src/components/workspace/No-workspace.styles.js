import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  container: {
    // marginTop: theme.spacing(5 * 2),
    // marginLeft: theme.spacing(4)
  },
  description: {
    color: "#727273",
    fontSize: theme.spacing(1.5)
  },
  title: {
    fontSize: theme.spacing(4.5),
    color: "#C2C1C1",
    fontWeight: 600,
  },
  subtitle: {
    fontWeight: 600,
    color: "#C2C1C1",
    fontSize: theme.spacing(2),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1)
  },
  steps_container: {
    height: 150,
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(3),
    borderLeft: "5px solid #5FB99E",
  },
  arrow_container: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
  arrow: {
    width: 20,
    border: "0.5px solid #5FB99E",
  },
  lint: {
    color: "#5FB99E",
    marginTop: theme.spacing(-4.5),
    marginLeft: theme.spacing(3.5)
  },
  inline: {
    display: "flex",
  },
  link: {
    color: "#5FB99E",
    textDecoration: "none",
  }
}));

export default useStyles;
