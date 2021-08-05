import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "components/projects/Card";
import CreateProjectBtn from "components/projects/CreateProjectBtn";
import WorkspacePopover from "components/modals/Popover";
import { Link } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import useStyles from "./WorkSpaceDashbord.styles";

const data = [
  {_id: "kjslkfdjg", title: "Dailytask", backgroundColor: "none" },
  {_id: "liedirkkd", title: "Protfolio", backgroundColor: "#6E2C79" },
  {_id: "slkdfjjgi", title: "Startup", backgroundColor: "#5351B5" },
  {_id: "jiwnsiejd", title: "Dailytask-backend", backgroundColor: "#1A304A" },
]

export default function Workspace({ title, id }) {
  const [list, setList] = useState(data);

  const classes = useStyles();
  const joinedTitle = title.split(" ").join("-");
 
  function handleDragEnd(result) {
    if (result.destination) {
      const projects = Array.from(list);
      const [reorderedItem] = projects.splice(result.source.index, 1);
      projects.splice(result.destination.index, 0, reorderedItem);
      setList(projects);
    }
  };

  return (
    <div className={classes.workspace}>
      <div className={classes.titleContainer}>
        <Typography
          component={Link}
          to={`/${joinedTitle}/update/${id}`}
          className={classes.workspace_title}
          variant="body1"
        >
          { title }
        </Typography>
        <WorkspacePopover _id={id} name={joinedTitle} />
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId={id}>
          {({ droppableProps, innerRef, placeholder }) => (
            <Grid { ...droppableProps } ref={ innerRef } container className={classes.projectCard_container}>
              {list.map(({_id, title, backgroundColor}, index) => (
                  <Draggable draggableId={_id} key={_id} index={index}>
                    {({ draggableProps, innerRef, dragHandleProps }) => (
                      <Grid { ...draggableProps } ref={ innerRef } { ...dragHandleProps } item>
                        <Card title={title} backgroundColor={backgroundColor} />
                      </Grid>
                    )}
                  </Draggable>
              ))}
              <Grid item>
                <CreateProjectBtn workspace={joinedTitle} />
              </Grid>
              { placeholder }
            </Grid>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
};