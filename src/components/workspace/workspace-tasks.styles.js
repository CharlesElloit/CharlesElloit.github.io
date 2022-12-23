import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100vh",
    background: "#161623",
    // backgroundImage: "linear-gradient(60deg, #29323c 0%, #485563 100%)",
    // background: "linear-gradient(40deg, rgba(18,29,61,1) 10%, rgba(22,26,38,1) 61%)",
  },
  ellipse: {
    width: 600,
    height: 600,
    left: 300,
    top: -100,
    background: "#0c445b",
    borderRadius: "50%",
    position: "absolute",
    zIndex: 1,
  },
  ellipse2: {
    width: 700,
    height: 700,
    left: 800,
    right: 400,
    bottom: -90,
    borderRadius: "50%",
    background: "#420c58",
    position: "absolute",
    zIndex: 1,
  },
  main_container: {
    width: "90%",
    margin: "0 auto",
    color: "white",
    height: "100vh",
    display: "flex",
    background: "black",
    zIndex: 2,
    backdropFilter: "blur(20px)",
  },
  divider: {
    width: "100%",
    color: "#ddd",
  },
  sideBar: {
    zIndex: 2,
    padding: 25,
    width: "20%",
    // background: "hsl(0, 0%, 97.6%)",
  },
  header: {
  },
  avatar_container: {
    fontSize: 14,
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    width: 25,
    height: 25,
    fontSize: 16,
    fontWeight: "bold",
    display: "flex",
    color: "black",
    marginRight: 10,
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 5,
    background: "white",
  },
  menu: {
    paddingTop: 10,
  },
  link: {
    display: "flex",
    alignItems: "center",
    // paddingTop: 20,
    color: "black"
  },
  link_text: {
    width: "100%",
    color: "white",
    fontSize: 14,
    marginLeft: 5,
    textDecoration: "none",
    padding: 10,
    "&:hover": {
      borderRadius: 5,
      background: "#22222C",
    }
  },
  main: {
    // background: "#ccc"
  }
}));

export default useStyles;
