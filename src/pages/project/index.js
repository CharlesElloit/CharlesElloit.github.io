import styled from "styled-components";
import Sidebar from "./Sidebar";
import MainSection from "./MainSection";

const ProjectPage = () => {
  return (
    <Div>
      <Sidebar />
      <MainSection />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
`;

export default ProjectPage;
