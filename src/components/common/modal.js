import { CloseIcon, Menu } from "assets/icons";
import React, { createRef, useEffect, useState } from "react";
import styled from "styled-components";
import InlineEditInput from "./inline-editable-input";

export default function Modal({ open, onClose }) {
  // const modalContainerRef = useRef();
  const [value, setValue] = useState();
  const contentRef = createRef(null);

  useEffect(() => {
    function listener(event) {
      if (contentRef.current && contentRef.current?.contains(event.target))
        onClose();
    }

    document.addEventListener("click", listener);

    return () => document.removeEventListener("click", listener);
  }, [contentRef, onClose]);

  if (!open) return null;
  return (
    <ModalBacground>
      <ModalContainer>
        <Content ref={contentRef}>
          <Header onClose={onClose} />
          <Box style={{ marginTop: "1rem", marginLeft: "-0.5rem" }}>
            <InlineEditInput {...{ value, setValue }} />
          </Box>
          <Description>
            Implementing the full OTP functionality such that users can use it
            to update or add
          </Description>
          <Box flex="flex">
            <Box width="60%">
              <SubTitle>Description</SubTitle>
              <Box width="100%" background="#098090">
                <Description width="400px">
                  Thanks for putting everything together though. Am impressed.
                  Here are something things that i think can improve the overall
                  performances and experience.
                </Description>
              </Box>
            </Box>
            <Box width="35%">
              <Box
                flex="flex"
                alignment="space-between"
                psoition="center"
                textAlign="center"
              >
                <SubTitle>Details</SubTitle>
                <Menu width={24} height={24} color="#fff" />
              </Box>
            </Box>
          </Box>
        </Content>
      </ModalContainer>
    </ModalBacground>
  );
}

const Header = ({ onClose }) => {
  return (
    <HeaderContainer>
      <Right>
        <Tag>T-29</Tag>
        <ProjectName>Unique</ProjectName>
      </Right>
      <Left>
        <CloseButton onClick={onClose}>
          <CloseIcon width={24} height={24} color="#F43C3C" />
        </CloseButton>
      </Left>
    </HeaderContainer>
  );
};

// passing in width and position
const Box = styled.div`
  width: ${(props) => props.width};
  // flex-direction: row;
  text-align: ${(props) => props.psoition};
  max-width: 1024px;
  // position: relative;
  align-items: ${(props) => props.textAlign};
  justify-content: ${(props) => props.alignment};
  background: ${(props) => props.background};
  display: ${(props) => (props.flex ? props.flex : "")};
`;

const Description = styled.span`
  width: ${(props) => props.width};
  color: #e5e5e5;
  font-size: 0.9rem;
`;

const CloseButton = styled.div`
  cursor: pointer;
`;

const SubTitle = styled.h3`
  // margin-top: 2rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectName = styled.span``;

const Right = styled.div``;

const Left = styled.div``;

const Tag = styled.span`
  margin-right: 0.8rem;
`;

const ModalContainer = styled.div`
  width: 1024px;
  height: 70vh;
  border-radius: 15px;
  padding: 1.5rem;
  position: absolute;
  background: #0d1117;
  border: 1px solid #1a2027;
  filter: drop-shadow(2px 2px 3px #0d1117);
`;

const Content = styled.div`
  // padding: 0 1.5rem;
`;

const ModalBacground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
