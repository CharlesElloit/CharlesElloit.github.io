import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: 700,
  },
  project_card: {
    width: theme.spacing(24),
    height: theme.spacing(13),
    border: "1px solid #494B4F",
    padding: theme.spacing(1),
    borderRadius: 5,
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
  }
}));

export default useStyles;
