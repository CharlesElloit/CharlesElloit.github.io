import useStyles from "./Card.styles";

export default function ProjectCard({ title }) {
  const classes = useStyles();
  return (
    <div className={classes.project_card}>
     { title }
    </div>
  );
};