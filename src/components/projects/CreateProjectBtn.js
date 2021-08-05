import { Link } from "react-router-dom";
import fileIcon from "assets/icons/fileIcon.svg";
import useStyles from "./Card.styles";

export default function CreateProjectBtn({ workspace }) {
  const classes = useStyles();
  return (
    <Link to={`/${workspace}/createp-project`} className={classes.createProjectBtn}>
      <img className={classes.createProjectBtnIcon} src={fileIcon} alt="fileIcon" />
    </Link>
  );
};