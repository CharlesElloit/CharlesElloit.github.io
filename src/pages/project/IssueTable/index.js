import React, { useState } from "react";
import styled from "styled-components";
import ArrowDown from "assets/icons/ArrowDown";
import { Plus } from "assets/icons";
import Row from "../Row";
import { Dropdown } from "components/common";

import testData from "../../../assets/data.json";
import InlineEditInput from "components/common/inline-editable-input";

export default function IssueTable() {
  const [value, setValue] = useState("No account deletation on the menu");
  const onDrop = (e) => {};

  const onDragOver = (e) => {};

  return (
    <>
      <DivContainer>
        <FlexDiv style={{ margin: "0.7rem 0" }}>
          <ArrowDown width={18} height={18} color="#6E7681" />
          <InlineEditInput
            fontSize="1rem"
            style={{
              display: "inline-block",
              minWidth: "320px",
              maxWidth: "100%",
            }}
            {...{ value, setValue }}
          />
          <IssuesCount>{testData.length}</IssuesCount>
        </FlexDiv>
        <FlexDiv>
          <Dropdown />
          <Plus width={14} height={14} color="#6E7681" />
        </FlexDiv>
      </DivContainer>

      <TableHeaderContainer>
        <Table cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th>At Risk</th>
              <th>Task name</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Done</th>
              <th>Start Date</th>
              <th>Due Date</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody
            // droppable={true}
            onDrop={(e) => onDrop(e)}
            onDragOver={(e) => onDragOver(e)}
          >
            {testData.map((task) => (
              <Row key={task.id} {...{ task }} />
            ))}
          </tbody>
        </Table>
      </TableHeaderContainer>
    </>
  );
}

const TableHeaderContainer = styled.div`
  width: 75%;
  white-space: nowrap;
  overflow: auto;
  padding-bottom: 20px;
  ::-webkit-scrollbar {
    height: 6px;
    border-radius: 3px;
    background: #28313e;
  }
  ::-webkit-scrollbar-thumb {
    width: 4px;
    border-radius: 3px;
    // background-color: #39485c;
    background-color: #58a6ff;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
  }
`;

const Table = styled.table`
  td,
  retrieviable th {
    text-align: left;
  }
  td {
    padding: 5px 10px;
    border-collapse: collapse;
  }
  th {
    // border-right: 1px solid #28313e;
    padding: 0 0.5rem;
    color: #494b4f;
    font-size: 16px;
    text-align: left;
    font-weight: 400;
  }

  tbody tr {
    :nth-of-type(odd) {
    }
    :hover {
    }
  }
  thead > tr {
  }
  tbody tr {
    border: 1px solid #28313e;
    :nth-child(1) {
      border-top-right-radius: 0.5rem;
    }
    // :hover {
    //   background: #28313e;
    // }
  }
`;

const FlexDiv = styled.div`
  display: flex;

  align-items: center;
`;

const IssuesCount = styled.span`
  font-size: 12px;
  font-weight: bold;
  margin-left: 0.5rem;
  color: #6e7681;
`;

const DivContainer = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// const IssueTitlte = styled.h2`
//   font-size: 18px;
//   color: #c2c1c1;
//   margin-left: 15px;
// `;
