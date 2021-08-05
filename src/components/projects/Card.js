import Typography from "@material-ui/core/Typography";
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import { Link } from "react-router-dom"
import useStyles from "./Card.styles";

export default function ProjectCard({ title, backgroundColor }) {
  const classes = useStyles();

  return (
    <div style={{ backgroundColor }} className={classes.project_card}>
      <Typography 
        className={classes.project_card_title} 
        component={Link} 
        to={`/${title}`} 
        variant="body2"
      >
        { title }
      </Typography>
      <DragIndicatorIcon className={classes.dragIcon} />
    </div>
  );
};