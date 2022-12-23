import React, { useState } from "react";
import styled from "styled-components";
import { DragIcon } from "assets/icons";
import Modal from "components/common/modal";

export default function Row({ task }) {
  const [atRisk, setAtRisk] = useState(false);
  const [open, setOpen] = useState(false);

  let taskname;
  if (task.name.length <= 57) {
    taskname = task.name;
  } else {
    taskname = task.name.split("").slice(0, 57).join("") + "...";
  }

  const onDrageStart = (e, id) => {
    console.log(id);
  };

  const onChange = (e) => {
    e.preventDefault();
    setAtRisk(!atRisk);
  };

  // const onOpen = () => {
  //   setOpen(true);
  //   console.log(open);
  // };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <TableRow
        // onClick={onOpen}
        draggable
        onDragStart={(e) => onDrageStart(e, task.id)}
      >
        <td>
          <FlexDiv>
            <Drag>
              <DragIcon width={14} height={18} />
            </Drag>
            <CheckBox
              onChange={(e) => onChange(e)}
              checked={task.at_risk}
              type="checkbox"
            />
          </FlexDiv>
        </td>
        <td>
          <TaskTitle>{taskname}</TaskTitle>
        </td>
        <td>
          <Priority props={task.priority}>{task.priority}</Priority>
        </td>
        <td>
          <Status props={task.status}>{task.status}</Status>
        </td>
        <td>
          <Done>{task.rate_completion}%</Done>
        </td>
        <td>
          <Date type="date" onChange={() => {}} value="2022-12-21" />
        </td>
        <td>29-01-2023</td>
      </TableRow>
      <Modal {...{ open, onClose }} />
    </>
  );
}

const TableRow = styled.tr`
  cursor: pointer;
  :hover {
    background: #1a2027;
  }
`;

const Date = styled.input`
  cursor: pointer;
  border: 0;
  outline: none;
  color: #b8b8b8;
  background: none;
`;

const CheckBox = styled.input`
  width: 18px;
  height: 18px;
  margin-left: 0.5rem;
`;

const Drag = styled.div`
  cursor: grab;
  display: flex;
`;

const TaskTitle = styled.span`
  color: #b8b8b8;
  font-size: 14px;
`;

const Status = styled.span`
  color: ${({ props }) => {
    if (props === "complete") return "#2EEE39";
    if (props === "on hold") return "#D09A48";
    if (props === "in progress") return "#5fb99e";
  }};
  font-size: 14px;
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Done = styled.span`
  font-size: 12px;
  color: #5fb99e;
`;

const Priority = styled.span`
  width: 80%;
  font-size: 12px;
  font-weight: bold;
  color: ${({ props }) => (props === "high" ? "white" : "black")};
  text-transform: capitalize;
  padding: 0.1em 0.3em;
  border-radius: 0.2em;
  background: ${({ props }) => {
    if (props === "low") return "gray";
    if (props === "high") return "#EE4949";
    if (props === "medium") return "#c4c738";
  }};
`;
