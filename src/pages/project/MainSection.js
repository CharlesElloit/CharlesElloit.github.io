import { Menu, Plus, SearchIcon } from "assets/icons";
import Calendar from "components/calendar";
import React from "react";
import styled from "styled-components";
import IssueTable from "./IssueTable";

function MainSection() {
  return (
    <Wrapper style={{ color: "white" }}>
      <TitleHeader>
        <Title>Core Banking System</Title>
        <Menu width={24} height={24} color="#c7c7c7" />
      </TitleHeader>

      <NewIssueBtn>
        <Plus width={14} height={14} color="#24BD8F" />
        <BtnText>New issue</BtnText>
      </NewIssueBtn>

      <TaskView>View</TaskView>

      {/* search bar */}
      <SearchBar>
        <SearchIcon width={20} height={20} />
        <Input placeholder="find a specific task" />
      </SearchBar>
      <IssueHeaderContainer>
        <FlexDiv>
          <IssueHeader>Issues</IssueHeader>
          <IssuesCount>6</IssuesCount>
        </FlexDiv>
      </IssueHeaderContainer>
      <Calendar />
      <IssueTable />
      <IssueTable />
    </Wrapper>
  );
}

const TaskView = styled.div`
  width: 73%;
  padding: 10px;
  margin-top: 42px;
  border-bottom: 1px solid #28313e;
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

const IssueHeaderContainer = styled.div`
  margin-top: 20px;
`;

const IssueHeader = styled.h1`
  font-size: 24px;
`;

const IssuesCount = styled.span`
  font-size: 12px;
  font-weight: bold;
  margin-left: 0.5rem;
  color: #6e7681;
`;

const SearchBar = styled.div`
  width: 400px;
  margin-top: 15px;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  border: 1px solid #28313e;
`;

const Input = styled.input`
  width: 80%;
  background: none;
  padding: 5px;
  font-size: 0.9rem;
  border: none;
  outline: none;
  color: white;
`;

const Wrapper = styled.main`
  width: 80%;
  padding: 0px 20px;
`;

const TitleHeader = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 40px;
`;

const BtnText = styled.span`
  margin-left: 5px;
`;

const NewIssueBtn = styled.div`
  display: flex;
  margin-top: 24px;
  cursor: pointer;
  align-items: center;
`;

export default MainSection;
