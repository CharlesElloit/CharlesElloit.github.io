import Menu from "assets/icons/Menu";
import React from "react";
import styled from "styled-components";

function Sidebar() {
  return (
    <Wrapper>
      <SideBarHeader>
        <Title>Eklow softwares</Title>
        <Menu width={24} height={24} color="#c7c7c7" />
      </SideBarHeader>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 18%;
  height: 95vh;
  padding: 24px;
  background-color: #111419;
`;

const SideBarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 20px;
`;

export default Sidebar;
